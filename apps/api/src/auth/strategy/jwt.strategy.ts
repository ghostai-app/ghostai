import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private usersService: UserService,
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
      ignoreExpiration: true,
    });
  }

  async validate(payload: { telegramId: string }) {
    try {
      const user = await this.usersService.getByTelegramId(payload.telegramId);

      if (!user) {
        throw new UnauthorizedException();
      }

      return user;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
