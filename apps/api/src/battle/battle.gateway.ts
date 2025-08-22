import {
  BadRequestException,
  Inject,
  Logger,
  UnauthorizedException,
  forwardRef,
  OnModuleInit,
} from '@nestjs/common';
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserEntity } from 'src/user/entities/user.entity';
import { BattleService, BattleWebSocketService } from './battle.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

interface JwtPayload {
  telegramId: string;
}

@WebSocketGateway({ namespace: '/battle', cors: true })
export class BattleGateway
  implements
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnModuleInit,
    BattleWebSocketService
{
  private readonly logger = new Logger(BattleGateway.name);

  @WebSocketServer()
  server: Server;

  private clients = new Map<number, Socket>();

  constructor(
    @Inject(forwardRef(() => BattleService))
    private readonly battleService: BattleService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  onModuleInit() {
    this.battleService.setWebSocketService(this);
  }

  /* Получение пользователя по JWT токену */
  async getUserFromToken(token: string): Promise<UserEntity> {
    const accessToken = token?.replace('Bearer ', '');

    if (!accessToken) {
      throw new UnauthorizedException();
    }

    const payload = await this.jwtService.verifyAsync<JwtPayload>(accessToken);

    const user = await this.userService.getByTelegramId(payload.telegramId);

    // console.log('user', user);
    if (!user || !user.id) {
      throw new BadRequestException();
    }

    return user as UserEntity;
  }

  async handleConnection(@ConnectedSocket() client: Socket) {
    try {
      const user = await this.getUserFromToken(client.handshake.auth.token);
      (client.data as any).user = user;
      this.clients.set(user.id, client);

      const heroId = Number(client.handshake.query.heroId as string);

      if (isNaN(heroId)) {
        throw new BadRequestException();
      }

      let battle = await this.battleService.getActiveBattle(user.id);

      if (!battle) {
        await this.battleService.addToQueue(heroId, user);

        battle = await this.battleService.getActiveBattle(user.id);
      }
      client.emit('battleUpdate', battle);
    } catch (error) {
      this.logger.error((error as Error).message);
      client.emit('error', { message: 'Ошибка аутентификации' });
      client.disconnect();
    }
  }

  async handleDisconnect(@ConnectedSocket() client: Socket) {
    const user = client.data.user as UserEntity;

    if (user && user.id) {
      this.clients.delete(user.id);

      await this.battleService.leaveQueue(user);
    }
  }

  async battleUpdate(battleId: number): Promise<void> {
    const battle = await this.battleService.getBattleStatus(battleId);
    if (!battle) return;

    for (const playerId of [battle.player1Id, battle.player2Id]) {
      if (playerId) {
        const client = this.clients.get(playerId);
        if (client) {
          const activeBattle =
            await this.battleService.getActiveBattle(playerId);
          client.emit('battleUpdate', activeBattle);
        }
      }
    }
  }

  async battleFinish(battleId: number): Promise<void> {
    const battle = await this.battleService.getBattleStatus(battleId);
    if (!battle) return;

    for (const playerId of [battle.player1Id, battle.player2Id]) {
      if (playerId) {
        const client = this.clients.get(playerId);

        if (client) {
          client.emit('battleFinish', battle);
        }
      }
    }
  }

  async battleStarting(battleId: number): Promise<void> {
    const battle = await this.battleService.getBattleStatus(battleId);
    if (!battle) return;

    for (const playerId of [battle.player1Id, battle.player2Id]) {
      if (playerId) {
        const client = this.clients.get(playerId);

        if (client) {
          client.emit('battleStarting', battle);
        }
      }
    }
  }
}
