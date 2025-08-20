import { Controller, Get, Post, Req } from '@nestjs/common';
import { MiningService } from './mining.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { ApiOkResponse } from '@nestjs/swagger';
import { MiningEntity } from './entities/mining.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('mining')
export class MiningController {
  constructor(private readonly miningService: MiningService) {}

  @Get()
  @ApiOkResponse({ type: MiningEntity })
  @Auth()
  async getMining(@Req() req: { user: UserEntity }) {
    return this.miningService.getMining(req.user);
  }

  @Post('start')
  @ApiOkResponse({ type: MiningEntity })
  @Auth()
  async startMining(@Req() req: { user: UserEntity }) {
    return this.miningService.startMining(req.user);
  }

  @Post('stop')
  @ApiOkResponse({ type: MiningEntity })
  @Auth()
  async stopMining(@Req() req: { user: UserEntity }) {
    return this.miningService.stopMining(req.user);
  }
}
