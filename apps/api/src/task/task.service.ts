import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { IQueryOptions } from 'src/shared/types/query-options.types';
import { TaskStatus, TaskType } from 'generated/prisma';
import { UserEntity } from 'src/user/entities/user.entity';
import { TelegramService } from 'src/telegram/telegram.service';

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly telegramService: TelegramService,
  ) {}

  async startTask(id: number, user: UserEntity) {
    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new BadRequestException();
    }

    await this.prisma.userTask.create({
      data: {
        taskId: id,
        userId: user.id,
        status: TaskStatus.IN_PROGRESS,
      },
    });

    return { success: true };
  }

  async checkTask(id: number, user: UserEntity) {
    const userTask = await this.prisma.userTask.findUnique({
      where: {
        userId_taskId: {
          userId: user.id,
          taskId: id,
        },
      },
      include: {
        task: true,
      },
    });

    if (!userTask) {
      throw new BadRequestException();
    }

    if (userTask.status !== TaskStatus.IN_PROGRESS) {
      throw new BadRequestException();
    }

    if (userTask.task.channelId) {
      const status = await this.telegramService.isUserSubscribed(
        user.telegramId,
        userTask.task.channelId,
      );

      if (!status) throw new BadRequestException();
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        balance: { increment: userTask.task.reward },
      },
    });

    await this.prisma.userTask.update({
      where: {
        id: userTask.id,
      },
      data: {
        status: TaskStatus.COMPLETED,
      },
    });

    return userTask.task;
  }

  async getAllToUser(user: UserEntity, type: TaskType) {
    const tasks = await this.prisma.task.findMany({
      select: {
        id: true,
        title: true,
        imageUrl: true,
        reward: true,
        link: true,
        userTasks: {
          where: {
            userId: user.id,
          },
          select: {
            status: true,
          },
        },
      },
      where: {
        type,
      },
    });

    return tasks.map((task) => ({
      ...task,
      status: task.userTasks[0]?.status,
    }));
  }

  async create(data: CreateTaskDto) {
    return await this.prisma.task.create({
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
      this.prisma.task.findMany({
        skip,
        take,
        where,
        orderBy,
      }),
      this.prisma.task.count({ where }),
    ]);

    return { items, total };
  }

  async getById(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateTaskDto) {
    return await this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.task.delete({ where: { id } });
  }
}
