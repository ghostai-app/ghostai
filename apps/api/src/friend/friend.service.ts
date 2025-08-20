import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { GetFriendsEntity } from './entities/get-friends.entity';
import { ConfigService } from '@nestjs/config';

const REFERRAL_BONUS = 1000;

@Injectable()
export class FriendService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async connectFriend(user: User, params?: string) {
    if (!params) return;

    const inviterId = params.replace('ref_', '');

    if (!inviterId) return;

    const inviter = await this.prisma.user.findUnique({
      where: {
        telegramId: inviterId,
      },
    });

    if (!inviter) return;

    const bonus = REFERRAL_BONUS;

    await this.prisma.friend.create({
      data: {
        inviterId: inviter.id,
        userId: user.id,
      },
    });

    await this.prisma.user.update({
      where: {
        id: inviter.id,
      },
      data: {
        balance: { increment: bonus },
      },
    });

    return inviter;
  }

  async processReward(user: UserEntity, amount: number) {
    const friend = await this.prisma.friend.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!friend) return;

    const inviter = await this.prisma.user.findUnique({
      where: {
        id: friend.inviterId,
      },
    });

    if (!inviter) return;

    await this.prisma.user.update({
      where: { id: inviter.id },
      data: {
        balance: {
          increment: amount,
        },
      },
    });

    await this.prisma.friend.update({
      where: {
        id: friend.id,
      },
      data: {
        earned: {
          increment: amount,
        },
      },
    });

    return;
  }

  async getFriends(user: UserEntity): Promise<GetFriendsEntity> {
    const friends = await this.prisma.friend.findMany({
      where: {
        inviterId: user.id,
      },
      include: {
        user: true,
      },
      orderBy: {
        earned: 'desc',
      },
      take: 100,
    });

    const totalFriends = await this.prisma.friend.count({
      where: {
        inviterId: user.id,
      },
    });

    return {
      total: totalFriends,
      friends: friends.map((friend) => ({
        id: friend.id,
        firstName: friend.user.firstName,
        photoUrl: friend.user.photoUrl ?? '',
        earned: friend.earned,
        createdOn: friend.createdOn,
      })),
      referralLink: `${this.configService.getOrThrow<string>('WEB_APP_URL')}?startapp=ref_${user.telegramId}`,
    };
  }
}
