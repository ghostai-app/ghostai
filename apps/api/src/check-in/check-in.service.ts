import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TelegramService } from 'src/telegram/telegram.service';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class CheckInService {
  constructor(
    private prisma: PrismaService,
    private telegramService: TelegramService,
  ) {}

  async claimReward(user: UserEntity): Promise<{ success: true }> {
    if (!user.streak || !user.dailyAvaliable) {
      throw new BadRequestException('No reward available');
    }

    const rewards = [2, 3, 4, 5, 6, 7, 10];
    const dailyReward = rewards[user.streak - 1] || 2;

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        dailyAvaliable: false,
        ticketCount: { increment: dailyReward },
        lastLoginAt: new Date(),
      },
    });

    return { success: true };
  }

  getCheckIn(user: UserEntity) {
    const rewards = [2, 3, 4, 5, 6, 7, 10];
    const days = rewards.map((reward, i) => ({
      day: i + 1,
      reward,
    }));

    // const subscribed = await this.telegramService.isUserSubscribed(
    //   user.telegramId,
    //   '@iPepe_official',
    // );

    return {
      days: days.map((d) => ({
        ...d,
        current: d.day === user.streak,
      })),
      subscribed: true,
    };
  }
}
