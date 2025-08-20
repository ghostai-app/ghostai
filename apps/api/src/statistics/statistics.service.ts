import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatisticsEntity } from './entity/statistics.entity';
import { subDays, subWeeks } from 'date-fns';

@Injectable()
export class StatisticsService {
  constructor(private prisma: PrismaService) {}

  async getStatistics(): Promise<StatisticsEntity> {
    const now = new Date();
    const oneDayAgo = subDays(now, 1);
    const oneWeekAgo = subWeeks(now, 1);

    // User statistics
    const [totalUsers, dailyUsers, monthlyUsers] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.user.count({
        where: {
          createdAt: {
            gte: oneDayAgo,
          },
        },
      }),
      this.prisma.user.count({
        where: {
          createdAt: {
            gte: subDays(now, 30),
          },
        },
      }),
    ]);

    const [totalMining, dailyMining, monthlyMining] = await Promise.all([
      this.prisma.mining.count({
        where: {
          startedAt: {
            gte: oneDayAgo,
          },
        },
      }),
      this.prisma.mining.count({
        where: {
          startedAt: {
            gte: oneWeekAgo,
          },
        },
      }),
      this.prisma.mining.count(),
    ]);

    return {
      totalUsers,
      dailyUsers,
      monthlyUsers,
      totalMining,
      dailyMining,
      monthlyMining,
    };
  }
}
