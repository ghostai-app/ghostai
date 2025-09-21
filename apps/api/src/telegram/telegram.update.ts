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

    await ctx.replyWithPhoto(`${assetsUrl}/welcome-ghostai.jpg`, {
      parse_mode: 'HTML',
      caption: `
<b>Ghost AI is more than a game — it’s a decentralized battlefield.

Powered by Crystals and $GAI, players forge lethal gear and dive into Winner Takes All PvP combat where every move has real value.

Equip, stake, and dominate — in Ghost AI, victory means owning it all 🦾</b>
`,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Open GhostAI bot', url: webAppUrl }],
          [
            {
              text: 'GhostAI X',
              url: 'https://x.com/ghostai_offcl',
            },
          ],
          [
            {
              text: 'Join GhostAI community',
              url: 'https://t.me/GHOSTAI_OFFCL',
            },
          ],
        ],
      },
    });
  }
}
