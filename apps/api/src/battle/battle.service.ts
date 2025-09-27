import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserBattleEntity } from './entities/get-user-battle.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Battle, BattleStatus } from 'generated/prisma';

export interface BattleWebSocketService {
  battleUpdate(battle: Battle): Promise<void>;
  battleFinish(battleId: number): Promise<void>;
  battleStarting(battleId: number): Promise<void>;
}

@Injectable()
export class BattleService {
  private wsService?: BattleWebSocketService;

  constructor(private readonly prisma: PrismaService) {}

  setWebSocketService(wsService: BattleWebSocketService) {
    this.wsService = wsService;
  }

  // Добавление игрока в очередь боя
  async addToQueue(heroId: number, user: UserEntity) {
    return await this.prisma.$transaction(async (prisma) => {
      // Проверяем баланс пользователя - минимум 500 для участия в боях
      if (user.balance < 500) {
        throw new BadRequestException(
          'Недостаточно средств для участия в бою. Минимум 500 токенов',
        );
      }

      const hero = await prisma.userHero.findUnique({
        where: {
          userId_heroId: {
            userId: user.id,
            heroId,
          },
        },
        include: { hero: true },
      });

      if (!hero) {
        throw new BadRequestException();
      }

      // Получаем бонусы от купленных предметов
      const itemBonuses = await this.getUserItemBonuses(user.id);

      const totalHealth = hero.hero.health + itemBonuses.health;
      const totalAttack = hero.hero.attack + itemBonuses.attack;

      const existingBattle = await prisma.battle.findFirst({
        where: {
          OR: [{ player1Id: user.id }, { player2Id: user.id }],
          status: { not: 'FINISHED' },
        },
      });

      if (existingBattle) {
        return existingBattle;
      }

      const pendingBattle = await prisma.battle.findFirst({
        where: {
          status: 'PENDING',
          player1Id: { not: user.id },
          player2Id: null,
        },
      });

      if (pendingBattle) {
        // Получаем первого игрока для проверки баланса
        const player1 = await prisma.user.findUnique({
          where: { id: pendingBattle.player1Id! },
          select: { balance: true },
        });

        // Проверяем баланс первого игрока
        if (!player1 || player1.balance < 500) {
          // Удаляем бой, если у первого игрока недостаточно средств
          await prisma.battle.delete({ where: { id: pendingBattle.id } });
          throw new BadRequestException(
            'Первый игрок не имеет достаточно средств для боя',
          );
        }

        // Списываем 500 с каждого игрока при начале боя
        await prisma.user.update({
          where: { id: pendingBattle.player1Id! },
          data: { balance: { decrement: 500 } },
        });

        await prisma.user.update({
          where: { id: user.id },
          data: { balance: { decrement: 500 } },
        });

        const battle = await prisma.battle.update({
          where: { id: pendingBattle.id },
          data: {
            player2Id: user.id,
            player2HeroId: heroId,
            player2Health: totalHealth,
            player2Attack: totalAttack,
            status: 'IN_PROGRESS',
          },
          include: {
            player1: true,
            player2: true,
            player1Hero: true,
            player2Hero: true,
          },
        });

        await this.wsService?.battleUpdate(battle);
        await this.wsService?.battleStarting(battle.id);

        return battle;
      } else {
        await prisma.battle.updateMany({
          where: {
            OR: [{ player1Id: user.id }, { player2Id: user.id }],
            status: 'IN_PROGRESS',
          },
          data: { status: 'FINISHED' },
        });

        // Списываем 500 токенов с игрока при создании нового боя
        await prisma.user.update({
          where: { id: user.id },
          data: { balance: { decrement: 500 } },
        });

        const newBattle = await prisma.battle.create({
          data: {
            player1Id: user.id,
            player1HeroId: heroId,
            player1Health: totalHealth,
            player1Attack: totalAttack,
            status: 'PENDING',
          },
          include: {
            player1: true,
            player2: true,
            player1Hero: true,
            player2Hero: true,
          },
        });

        await this.wsService?.battleUpdate(newBattle);

        return newBattle;
      }
    });
  }

  // Удаление игрока из очереди
  async leaveQueue(user: UserEntity) {
    return await this.prisma.$transaction(async (prisma) => {
      const battle = await prisma.battle.findFirst({
        where: {
          OR: [{ player1Id: user.id }, { player2Id: user.id }],
        },
      });

      if (battle && battle.status === 'PENDING') {
        try {
          // Возвращаем 500 токенов игроку, если он выходит из очереди
          await prisma.user.update({
            where: { id: user.id },
            data: { balance: { increment: 500 } },
          });

          await prisma.battle.delete({ where: { id: battle.id } });
        } catch (err) {
          console.error(err);
        }
      }

      return { ok: true };
    });
  }

  /* Результаты боя */
  async getBattleResults(
    id: number,
    user: UserEntity,
  ): Promise<{ winner: boolean }> {
    const battle = await this.prisma.battle.findUnique({
      where: {
        id,
      },
    });

    if (!battle) {
      throw new BadRequestException();
    }

    return {
      winner: battle.winnerId === user.id,
    };
  }

  // Получение статуса боя
  async getBattleStatus(id: number) {
    return await this.prisma.battle.findUnique({
      where: { id },
      include: {
        player1: true,
        player2: true,
        player1Hero: true,
        player2Hero: true,
      },
    });
  }

  // Преобразование Battle в GetUserBattleEntity для конкретного пользователя
  transformBattleForUser(
    battle: Battle & {
      player1?: { username: string | null };
      player2?: { username: string | null };
      player1Hero?: any;
      player2Hero?: any;
    },
    userId: number,
  ): GetUserBattleEntity | null {
    if (!battle || !battle.player1Hero || !battle.player2Hero) {
      return null;
    }

    const isPlayer1 = battle.player1Id === userId;

    return {
      id: battle.id,
      status: battle.status,
      userName: isPlayer1
        ? battle.player1?.username || ''
        : battle.player2?.username || '',
      userHealth: isPlayer1
        ? battle.player1Health || 0
        : battle.player2Health || 0,
      userAttack: isPlayer1
        ? (battle as any).player1Attack || 0
        : (battle as any).player2Attack || 0,
      userHero: isPlayer1 ? battle.player1Hero! : battle.player2Hero!,
      enemyName: isPlayer1
        ? battle.player2?.username || ''
        : battle.player1?.username || '',
      enemyHealth: isPlayer1
        ? battle.player2Health || 0
        : battle.player1Health || 0,
      enemyAttack: isPlayer1
        ? (battle as any).player2Attack || 0
        : (battle as any).player1Attack || 0,
      enemyHero: isPlayer1 ? battle.player2Hero! : battle.player1Hero!,
    };
  }

  async getUserItemBonuses(
    userId: number,
  ): Promise<{ attack: number; health: number }> {
    const userProducts = await this.prisma.userProduct.findMany({
      where: { userId },
      include: { product: true },
    });

    const validProducts = userProducts.filter((up) => up.product);

    if (!validProducts.length) {
      return { attack: 0, health: 0 };
    }

    return {
      attack: validProducts.reduce(
        (acc, userProduct) => acc + (userProduct.product.attack || 0),
        0,
      ),
      health: validProducts.reduce(
        (acc, userProduct) => acc + (userProduct.product.health || 0),
        0,
      ),
    };
  }

  // Получение текущего боя пользователя
  async getActiveBattle(id: number): Promise<GetUserBattleEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        username: true,
      },
    });

    const battle = await this.prisma.battle.findFirst({
      where: {
        OR: [{ player1Id: id }, { player2Id: id }],
        status: { not: 'FINISHED' },
      },
      include: {
        player1Hero: true,
        player2Hero: true,
        player1: true,
        player2: true,
      },
    });

    if (!battle || !user) return null;

    const isPlayer1 = battle.player1Id === id;

    const data: GetUserBattleEntity = {
      id: battle.id,
      status: battle.status,
      userName: user.username || '',
      userHealth: isPlayer1
        ? battle.player1Health || 0
        : battle.player2Health || 0,
      userAttack: isPlayer1
        ? (battle as any).player1Attack || 0
        : (battle as any).player2Attack || 0,
      userHero: isPlayer1 ? battle.player1Hero! : battle.player2Hero!,
      enemyName: isPlayer1
        ? battle.player2?.username || ''
        : battle.player1?.username || '',
      enemyHealth: isPlayer1
        ? battle.player2Health || 0
        : battle.player1Health || 0,
      enemyAttack: isPlayer1
        ? (battle as any).player2Attack || 0
        : (battle as any).player1Attack || 0,
      enemyHero: isPlayer1 ? battle.player2Hero! : battle.player1Hero!,
    };

    return data;
  }

  // Нанесение урона противнику
  async damageEnemy(battleId: number, user: UserEntity, clicks: number) {
    return await this.prisma.$transaction(async (prisma) => {
      const battle = await prisma.battle.findUnique({
        where: { id: battleId },
        include: {
          player1Hero: true,
          player2Hero: true,
          player1: true,
          player2: true,
        },
      });

      if (!battle) {
        throw new BadRequestException();
      }

      if (battle.status !== 'IN_PROGRESS') {
        throw new BadRequestException();
      }

      const isPlayer1 = battle.player1Id === user.id;
      const heroAttack = isPlayer1
        ? (battle as any).player1Attack
        : (battle as any).player2Attack;

      if (!heroAttack) {
        throw new BadRequestException();
      }

      const damage = clicks * heroAttack;
      const targetField = isPlayer1 ? 'player2Health' : 'player1Health';
      const targetHealth = battle[targetField];

      if (!targetHealth || targetHealth <= 0) {
        throw new BadRequestException();
      }

      const newHealth = Math.max(0, targetHealth - damage);
      const updatedBattle = await prisma.battle.update({
        where: { id: battleId },
        data: {
          [targetField]: newHealth,
          status: newHealth === 0 ? 'FINISHED' : 'IN_PROGRESS',
          winnerId: newHealth === 0 ? user.id : null,
        },
      });

      if (newHealth <= 0) {
        const winnerId = user.id;
        const loserId = isPlayer1 ? battle.player2Id : battle.player1Id;

        if (loserId) {
          // Сбрасываем стрик проигравшего (средства уже списаны при вступлении в бой)
          await prisma.user.update({
            where: { id: loserId },
            data: {
              streak: 0,
            },
          });
        }

        // Победитель получает все ставки (1000 - по 500 с каждого игрока)
        await prisma.user.update({
          where: { id: winnerId },
          data: {
            balance: { increment: 1000 },
            streak: { increment: 1 },
          },
        });

        await this.wsService?.battleFinish(battleId);
      } else {
        await this.wsService?.battleUpdate(battle);
      }

      return updatedBattle;
    });
  }

  // Обновление статуса боя
  async updateBattleStatus(battleId: number, status: BattleStatus) {
    return await this.prisma.battle.update({
      where: { id: battleId },
      data: { status },
    });
  }
}
