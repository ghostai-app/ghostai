import { Controller, Get, Post, Req } from '@nestjs/common';
import { RouletteService } from './roulette.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('roulette')
export class RouletteController {
  // constructor(private readonly rouletteService: RouletteService) {}
  // @Get('items')
  // @ApiOkResponse()
  // @ApiBearerAuth()
  // @Auth()
  // getItems() {
  //   return this.rouletteService.getItems();
  // }
  // @Post('spin')
  // @ApiOkResponse()
  // @ApiBearerAuth()
  // @Auth()
  // spin(@Req() req: { user: UserEntity }) {
  //   return this.rouletteService.spin(req.user);
  // }
}
