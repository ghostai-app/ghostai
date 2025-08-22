import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserBattleEntity } from './entities/get-user-battle.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { BattleStatus } from 'generated/prisma';

export interface BattleWebSocketService {
  battleUpdate(battleId: number): Promise<void>;
  battleFinish(battleId: number): Promise<void>;
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

      const existingBattle = await prisma.battle.findFirst({
        where: {
          OR: [{ player1Id: user.id }, { player2Id: user.id }],
          status: { not: 'FINISHED' },
        },
      });

      if (existingBattle) return existingBattle;

      const pendingBattle = await prisma.battle.findFirst({
        where: {
          status: 'PENDING',
          player1Id: { not: user.id },
          player2Id: null,
        },
      });

      if (pendingBattle) {
        const battle = await prisma.battle.update({
          where: { id: pendingBattle.id },
          data: {
            player2Id: user.id,
            player2HeroId: heroId,
            player2Health: hero.hero.health,
            status: 'IN_PROGRESS',
          },
        });

        await this.wsService?.battleUpdate(battle.id);

        return battle;
      } else {
        await prisma.battle.updateMany({
          where: {
            OR: [{ player1Id: user.id }, { player2Id: user.id }],
            status: 'IN_PROGRESS',
          },
          data: { status: 'FINISHED' },
        });

        const newBattle = await prisma.battle.create({
          data: {
            player1Id: user.id,
            player1HeroId: heroId,
            player1Health: hero.hero.health,
            status: 'PENDING',
          },
        });

        await this.wsService?.battleUpdate(newBattle.id);

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
      },
    });
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
      userHero: isPlayer1 ? battle.player1Hero! : battle.player2Hero!,
      enemyName: isPlayer1
        ? battle.player2?.username || ''
        : battle.player1?.username || '',
      enemyHealth: isPlayer1
        ? battle.player2Health || 0
        : battle.player1Health || 0,
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
        },
      });

      if (!battle) {
        throw new BadRequestException();
      }

      if (battle.status !== 'IN_PROGRESS') {
        throw new BadRequestException();
      }

      const isPlayer1 = battle.player1Id === user.id;
      const heroDamage = isPlayer1
        ? battle.player1Hero?.attack
        : battle.player2Hero?.attack;

      if (!heroDamage) {
        throw new BadRequestException();
      }

      const damage = clicks * heroDamage;
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
          // Сбрасываем стрик проигравшего
          await prisma.user.update({
            where: { id: loserId },
            data: {
              balance: { decrement: 500 },
              streak: 0,
            },
          });
        }

        // Победитель получает награду
        await prisma.user.update({
          where: { id: winnerId },
          data: {
            balance: { increment: 1000 },
            streak: { increment: 1 },
          },
        });

        await this.wsService?.battleFinish(battleId);
      } else {
        await this.wsService?.battleUpdate(battleId);
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
