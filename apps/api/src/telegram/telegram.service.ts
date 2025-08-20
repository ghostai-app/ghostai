import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);
  public bot: Telegraf;

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    const token = this.configService.getOrThrow<string>('BOT_TOKEN');
    this.bot = new Telegraf(token);
  }

  async isUserSubscribed(
    telegramId: string,
    channelId: string,
  ): Promise<boolean> {
    try {
      const user = await this.bot.telegram.getChatMember(
        channelId,
        Number(telegramId),
      );

      return ['member', 'administrator', 'creator'].includes(user.status);
    } catch {
      return false;
    }
  }
}
