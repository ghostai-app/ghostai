import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { BattleGateway } from './battle.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '365d' },
      }),
    }),
  ],
  controllers: [BattleController],
  providers: [BattleService, BattleGateway],
  exports: [BattleService, BattleGateway],
})
export class BattleModule {}
