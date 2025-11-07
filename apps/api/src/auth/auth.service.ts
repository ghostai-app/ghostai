import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InitData } from '@telegram-apps/init-data-node';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { FriendService } from 'src/friend/friend.service';
import { User } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private friendService: FriendService,
  ) {}

  private calculateDailyStreak(user: User): {
    streak: number;
    wasOnlineToday: boolean | null;
  } {
    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0));
    const lastLoginDate = user.lastLoginAt ? new Date(user.lastLoginAt) : null;

    const missedDay =
      lastLoginDate &&
      todayStart.getTime() - lastLoginDate.getTime() > 24 * 60 * 60 * 1000;

    const wasOnlineToday =
      lastLoginDate && lastLoginDate.getTime() >= todayStart.getTime();

    let streak = user.streak;

    if (missedDay || user.dailyAvaliable) {
      streak = 1;
    } else {
      streak += 1;
    }

    return { streak, wasOnlineToday };
  }

  async auth(initData: InitData) {
    if (!initData.user) {
      throw new UnauthorizedException('User not found');
    }

    let user = await this.prisma.user.findUnique({
      where: {
        telegramId: initData.user?.id.toString(),
      },
    });

    if (user) {
      await this.prisma.user.update({
        where: {
          telegramId: initData.user?.id.toString(),
        },
        data: {
          lastLoginAt: new Date(),
        },
      });
    } else {
      const weakestHero = await this.prisma.hero.findFirst({
        orderBy: {
          health: 'asc',
        },
      });

      user = await this.prisma.user.create({
        data: {
          telegramId: initData.user?.id.toString(),
          firstName: initData.user?.first_name,
          lastName: initData.user?.last_name,
          username: initData.user?.username,
          telegramLanguage: initData.user?.language_code,
          isPremium: initData.user?.is_premium || false,
          photoUrl: initData.user?.photo_url,
          ...(weakestHero
            ? {
                userHeroes: {
                  create: {
                    heroId: weakestHero.id,
                  },
                },
              }
            : {}),
        },
      });

      await this.friendService.connectFriend(user, initData.start_param);
    }

    const { streak, wasOnlineToday } = this.calculateDailyStreak(user);

    if (!wasOnlineToday) {
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          streak,
          dailyAvaliable: true,
        },
      });
    }

    const accessToken = this.jwtService.sign({ telegramId: user.telegramId });

    return { accessToken, user };
  }
}
