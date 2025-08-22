import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TelegramService } from 'src/telegram/telegram.service';
import { UserEntity } from 'src/user/entities/user.entity';

const BASE_REWARD = 1000;

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

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        dailyAvaliable: false,
        crystal: { increment: BASE_REWARD },
        lastLoginAt: new Date(),
      },
    });

    return { success: true };
  }

  getCheckIn() {
    return {
      reward: BASE_REWARD,
    };
  }
}
