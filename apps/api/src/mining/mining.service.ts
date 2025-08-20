import { BadRequestException, Injectable } from '@nestjs/common';
import { addSeconds } from 'date-fns';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { MiningEntity } from './entities/mining.entity';
import { FriendService } from 'src/friend/friend.service';

@Injectable()
export class MiningService {
  constructor(
    private prisma: PrismaService,
    private friendService: FriendService,
  ) {}

  async startMining(user: UserEntity): Promise<{
    success: boolean;
    expiresAt: Date;
    amount: number;
    startedAt: Date;
  }> {
    const existingMining = await this.prisma.mining.findFirst({
      where: {
        userId: user.id,
        expiresAt: {
          gt: new Date(),
        },
        finishedAt: null,
      },
    });

    if (existingMining) {
      throw new BadRequestException('You already have an active mining');
    }

    const miningTimeInSeconds = user.miningTimeInSeconds;
    const miningProfit = user.miningProfit;

    const mining = await this.prisma.mining.create({
      data: {
        userId: user.id,
        amount: miningProfit,
        expiresAt: addSeconds(new Date(), miningTimeInSeconds),
      },
    });

    return {
      success: true,
      expiresAt: mining.expiresAt,
      amount: mining.amount,
      startedAt: mining.startedAt,
    };
  }

  async stopMining(user: UserEntity) {
    const mining = await this.prisma.mining.findFirst({
      where: {
        userId: user.id,
        finishedAt: null,
        expiresAt: {
          lt: new Date(),
        },
      },
    });

    if (!mining) {
      throw new BadRequestException("You don't have an active mining");
    }

    await this.prisma.mining.update({
      where: { id: mining.id },
      data: { finishedAt: new Date() },
    });

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        balance: parseFloat((user.balance + mining.amount).toFixed(2)),
      },
    });

    await this.friendService.processReward(user, mining.amount);

    return {
      success: true,
      amount: mining.amount,
    };
  }

  async getMining(user: UserEntity): Promise<MiningEntity> {
    const mining = await this.prisma.mining.findFirst({
      where: {
        userId: user.id,
        finishedAt: null,
      },
      orderBy: {
        expiresAt: 'desc',
      },
    });

    return {
      isActive: !!mining,
      amount: mining?.amount,
      expiresAt: mining?.expiresAt,
      startedAt: mining?.startedAt,
    };
  }
}
