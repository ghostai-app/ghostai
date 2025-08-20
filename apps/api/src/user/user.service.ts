import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { IQueryOptions } from 'src/shared/types/query-options.types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getByTelegramId(telegramId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        telegramId,
      },
    });

    return user;
  }

  async getAll(params: IQueryOptions) {
    const { page = 1, per_page = 10, filters, sorters } = params;

    const skip = (page - 1) * per_page;
    const take = Number(per_page);

    const where: Record<string, unknown> = {};
    if (filters?.length) {
      filters.forEach(({ field, operator, value }) => {
        switch (operator) {
          case 'eq':
            where[field] = { equals: value };
            break;
          case 'contains':
            where[field] = { contains: value, mode: 'insensitive' };
            break;
        }
      });
    }

    const orderBy: Record<string, 'asc' | 'desc'> = {};
    if (sorters?.length) {
      sorters.forEach(({ field, order }) => {
        orderBy[field] = order.toLowerCase() as 'asc' | 'desc';
      });
    }

    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        skip,
        take,
        where,
        orderBy,
      }),
      this.prisma.user.count({ where }),
    ]);

    return { items, total };
  }

  async getById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    const referralCount = await this.prisma.friend.count({
      where: {
        inviterId: id,
      },
    });

    return { ...user, referralCount };
  }

  async update(id: number, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
