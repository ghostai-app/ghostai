import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { GetLeaderboardEntity } from './entities/get-leaderboard.entity';

@Injectable()
export class LeaderService {
  constructor(private readonly prisma: PrismaService) {}

  async getLeaderboard(user: UserEntity): Promise<GetLeaderboardEntity> {
    const leaderboard = await this.prisma.user.findMany({
      orderBy: {
        balance: 'desc',
      },
      select: {
        id: true,
        photoUrl: true,
        firstName: true,
        balance: true,
        createdAt: true,
      },
      take: 10,
    });

    const rank = await this.prisma.user.count({
      where: {
        balance: {
          gt: user.balance,
        },
      },
    });

    return {
      leaders: leaderboard.map((leader, index) => ({
        ...leader,
        photoUrl: leader.photoUrl || '',
        rank: index + 1,
      })),
      currentUser: {
        id: user.id,
        firstName: user.firstName,
        balance: user.balance,
        photoUrl: user.photoUrl || '',
        createdAt: user.createdAt,
        rank: rank + 1,
      },
    };
  }
}
