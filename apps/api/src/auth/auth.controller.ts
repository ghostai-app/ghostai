import {
  BadRequestException,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { getInitData, ValidateGuard } from './guard/validate.guard';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  @UseGuards(ValidateGuard)
  @ApiOkResponse()
  async auth(@Req() req) {
    const initData = getInitData(req);

    if (!initData) {
      throw new BadRequestException();
    }

    return this.authService.auth(initData);
  }
}
