import { Update, Ctx, Start } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { Scenes } from 'telegraf';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface CustomContext extends Context {
  scene: Scenes.SceneContextScene<CustomContext>;
  match?: RegExpMatchArray;
  payload: string;
}

@Injectable()
@Update()
export class TelegramUpdate {
  constructor(private readonly configService: ConfigService) {}
  private readonly logger = new Logger(TelegramUpdate.name);

  @Start()
  async start(@Ctx() ctx: CustomContext) {
    const webAppUrl = this.configService.getOrThrow<string>('WEB_APP_URL');
    const assetsUrl = this.configService.getOrThrow<string>('ASSETS_URL');

    await ctx.replyWithPhoto(`${assetsUrl}/dotpengu1.jpg`, {
      caption: `Welcome all to DOTPENGU!\n\nDOTPENGU is rising meme in BNB 🔥\n\nStart accumulating $DOTPG for airdrop!`,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Play DOTPENGU', url: webAppUrl }],
          [
            {
              text: 'Join DOTPENGU TG',
              url: 'https://t.me/DotPengu_meme',
            },
          ],
          [
            {
              text: 'Follow DOTPENGU X',
              url: 'https://x.com/dotpengu_meme',
            },
          ],
        ],
      },
    });
  }
}
