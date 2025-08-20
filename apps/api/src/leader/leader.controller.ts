import { Controller, Get, Req } from '@nestjs/common';
import { LeaderService } from './leader.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('leader')
export class LeaderController {
  constructor(private readonly leaderService: LeaderService) {}

  @Get()
  @ApiBearerAuth()
  @Auth()
  @ApiOkResponse()
  async getLeaderboard(@Req() req: { user: UserEntity }) {
    return this.leaderService.getLeaderboard(req.user);
  }
}
