import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { validate, parse, InitData } from '@telegram-apps/init-data-node';

@Injectable()
export class ValidateGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.configService.getOrThrow<string>('BOT_TOKEN');

    const [authType, authData = ''] = (
      request.header('authorization') || ''
    ).split(' ');

    if (authType !== 'tma') {
      throw new UnauthorizedException('Unauthorized');
    }

    try {
      validate(authData, token, {
        expiresIn: 3600000,
      });

      const initData = parse(authData);
      request.initData = initData;

      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired init data');
    }
  }
}

export function setInitData(req: any, initData: InitData): void {
  req.initData = initData;
}

export function getInitData(req: any): InitData | undefined {
  return req.initData;
}
