import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TelegramModule } from './telegram/telegram.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FriendModule } from './friend/friend.module';
import { MiningModule } from './mining/mining.module';
import { StatisticsModule } from './statistics/statistics.module';
import { AdminModule } from './admin/admin.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { LeaderModule } from './leader/leader.module';
import { WalletModule } from './wallet/wallet.module';
import { RouletteModule } from './roulette/roulette.module';
import { CheckInModule } from './check-in/check-in.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TelegramModule,
    UserModule,
    AuthModule,
    FriendModule,
    AuthModule,
    MiningModule,
    StatisticsModule,
    AdminModule,
    UploadModule,
    TaskModule,
    LeaderModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: {
        index: false,
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
      serveStaticOptions: {
        index: false,
      },
    }),
    WalletModule,
    RouletteModule,
    CheckInModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
