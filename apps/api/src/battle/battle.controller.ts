import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { BattleService } from './battle.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post('damage/:battleId')
  @Auth()
  @ApiOkResponse()
  damageEnemy(
    @Req() req: { user: UserEntity },
    @Param('battleId', ParseIntPipe) battleId: number,
    @Body() data: { clicks: number },
  ) {
    return this.battleService.damageEnemy(battleId, req.user, data.clicks);
  }

  @Get('results/:battleId')
  @Auth()
  getBattleResults(
    @Req() req: { user: UserEntity },
    @Param('battleId', ParseIntPipe) battleId: number,
  ) {
    return this.battleService.getBattleResults(battleId, req.user);
  }
}
