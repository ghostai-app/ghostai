import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ITEMS } from './data/items.data';
import { UserEntity } from 'src/user/entities/user.entity';
import { WINNING_COMBINATIONS } from './data/items.data';
import { RouletteItemEntity } from './entities/roulette-item.entity';

@Injectable()
export class RouletteService {
  constructor(private readonly prisma: PrismaService) {}

  getItems(): RouletteItemEntity[] {
    return ITEMS;
  }

  async spin(user: UserEntity) {
    if (user.ticketCount <= 0) {
      throw new Error('No tickets left');
    }

    const items = this.getItems();
    const selectedItems: RouletteItemEntity[] = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * items.length);
      selectedItems.push(items[randomIndex]);
    }

    const selectedIndexes = selectedItems.map((item) => item.index);
    const winningCombination = WINNING_COMBINATIONS.find((combo) =>
      combo.combination.every((num, index) => num === selectedIndexes[index]),
    );

    if (winningCombination) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          balance: {
            increment: winningCombination.reward,
          },
          ticketCount: Math.max(0, user.ticketCount - 1),
        },
      });
    } else {
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          balance: Math.max(0, user.balance - 1),
          ticketCount: Math.max(0, user.ticketCount - 1),
        },
      });
    }

    return {
      combination: selectedIndexes,
      reward: winningCombination?.reward || -1,
    };
  }
}
