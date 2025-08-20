import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { session } from 'telegraf';
import { TelegramUpdate } from './telegram.update';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.getOrThrow<string>('BOT_TOKEN'),
        middlewares: [session()],
        include: [TelegramModule],
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [TelegramController],
  providers: [TelegramUpdate, TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
