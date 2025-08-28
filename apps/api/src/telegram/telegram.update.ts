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

    await ctx.replyWithPhoto(`${assetsUrl}/ghostai.jpg`, {
      caption: `
WELCOME TO GHOSTAI

BRIEF

Mine and Earn
Missions. Mine. Open cases. Upgrade. Stack $GAI.

Select Your Soldier
Open the Shop. Buy a soldier. Level up.

Clash and Climb
Real time battles. Drain. Earn. Rank.

Referral
Invite friends. Their ranks boost your bonus.

Rewards per Hour
Auto farm for 3 hours offline. Log in to refresh.
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
