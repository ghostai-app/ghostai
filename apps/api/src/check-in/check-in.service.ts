import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TelegramService } from 'src/telegram/telegram.service';
import { UserEntity } from 'src/user/entities/user.entity';

const BASE_REWARD = 1000;
const MAX_STREAK_DAY = 5;

export interface CheckInDay {
  day: number;
  reward: number;
  current: boolean;
}

@Injectable()
export class CheckInService {
  constructor(
    private prisma: PrismaService,
    private telegramService: TelegramService,
  ) {}

  /**
   * Calculates reward based on streak with cycle 1-5 days
   * Day 1: 1000, Day 2: 2000, Day 3: 3000, Day 4: 4000, Day 5: 5000
   * After day 5, cycle resets to day 1
   */
  private calculateReward(streak: number): number {
    const dayInCycle = ((streak - 1) % MAX_STREAK_DAY) + 1;
    return dayInCycle * BASE_REWARD;
  }

  /**
   * Gets day number in cycle (1-5) based on streak
   */
  private getDayInCycle(streak: number): number {
    return ((streak - 1) % MAX_STREAK_DAY) + 1;
  }

  /**
   * Gets day number with offset, handling cycle wrapping
   * @param baseDay - Base day (1-5)
   * @param offset - Offset from base day (can be negative)
   * @returns Day number in cycle (1-5)
   */
  private getDayWithOffset(baseDay: number, offset: number): number {
    const day = baseDay + offset;
    // Handle negative values and wrap around using modulo
    // Add MAX_STREAK_DAY to ensure positive value before modulo
    const normalizedDay = ((day - 1 + MAX_STREAK_DAY * 2) % MAX_STREAK_DAY) + 1;
    return normalizedDay;
  }

  /**
   * Calculates new streak based on last check-in date
   * - If last check-in was yesterday (within 24-48 hours): increment streak
   * - If last check-in was more than 48 hours ago: reset streak to 1
   * - If last check-in was today: should not happen (dailyAvaliable should be false)
   * - If no last check-in: start with streak 1
   */
  private calculateNewStreak(
    currentStreak: number,
    lastCheckInAt: Date | null,
  ): number {
    if (!lastCheckInAt) {
      // First check-in ever
      return 1;
    }

    const now = new Date();
    const lastCheckIn = new Date(lastCheckInAt);
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);

    const yesterdayStart = new Date(todayStart);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);

    const lastCheckInDate = new Date(lastCheckIn);
    lastCheckInDate.setHours(0, 0, 0, 0);

    // Check if last check-in was yesterday
    const wasYesterday = lastCheckInDate.getTime() === yesterdayStart.getTime();

    // Check if last check-in was today (shouldn't happen, but handle it)
    const wasToday = lastCheckInDate.getTime() === todayStart.getTime();

    if (wasToday) {
      // Already claimed today, should not happen
      return currentStreak;
    }

    if (wasYesterday) {
      // Consecutive day - increment streak
      return currentStreak + 1;
    }

    // More than 1 day passed - reset streak
    return 1;
  }

  async claimReward(user: UserEntity): Promise<{ success: true }> {
    if (!user.streak || !user.dailyAvaliable) {
      throw new BadRequestException('No reward available');
    }

    // Calculate new streak based on last check-in
    const newStreak = this.calculateNewStreak(
      user.streak,
      user.lastCheckInAt || null,
    );

    const reward = this.calculateReward(newStreak);
    const now = new Date();

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        dailyAvaliable: false,
        crystal: { increment: reward },
        lastLoginAt: now,
        streak: newStreak,
        lastCheckInAt: now,
      },
    });

    return { success: true };
  }

  getCheckIn(user: UserEntity): { days: CheckInDay[] } {
    // Always return data, even if streak is 0 or null
    // Use streak or default to 1 if not available
    const streak = user.streak && user.streak > 0 ? user.streak : 1;
    const currentDay = this.getDayInCycle(streak);
    const days: CheckInDay[] = [];

    // Create array: [day-2, day-1, currentDay, day+1, day+2]
    // Current day should be at index 2
    for (let i = -2; i <= 2; i++) {
      const day = this.getDayWithOffset(currentDay, i);
      const reward = day * BASE_REWARD;
      const isCurrent = i === 0;

      days.push({
        day,
        reward,
        current: isCurrent,
      });
    }

    console.log(days);

    return { days };
  }
}
