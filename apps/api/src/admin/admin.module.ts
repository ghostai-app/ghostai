import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AdminJwtStrategy } from './strategy/admin-jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '365d' },
      }),
    }),
    UserModule,
  ],
  controllers: [AdminController],
  providers: [AdminService, AdminJwtStrategy],
})
export class AdminModule {}
