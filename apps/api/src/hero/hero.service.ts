import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { IQueryOptions } from 'src/shared/types/query-options.types';
import { UserEntity } from 'src/user/entities/user.entity';
import { HeroEntity } from './entities/hero.entity';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}

  async getUserHeroes(user: UserEntity): Promise<HeroEntity[]> {
    return await this.prisma.hero.findMany({
      where: {
        userHeroes: {
          some: { userId: user.id },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create(data: CreateHeroDto) {
    return await this.prisma.hero.create({
      data,
    });
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
      this.prisma.hero.findMany({
        skip,
        take,
        where,
        orderBy,
      }),
      this.prisma.hero.count({ where }),
    ]);

    return { items, total };
  }

  async getById(id: number) {
    return await this.prisma.hero.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateHeroDto) {
    return await this.prisma.hero.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.hero.delete({ where: { id } });
  }
}
