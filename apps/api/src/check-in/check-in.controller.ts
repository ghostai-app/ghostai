import { Controller, Get, Post, Req } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('check-in')
export class CheckInController {
  constructor(private readonly checkInService: CheckInService) {}

  @Get()
  @ApiOkResponse()
  @ApiBearerAuth()
  @Auth()
  getCheckIn(@Req() req: { user: UserEntity }) {
    return this.checkInService.getCheckIn(req.user);
  }

  @Post()
  @ApiOkResponse()
  @ApiBearerAuth()
  @Auth()
  claimReward(@Req() req: { user: UserEntity }) {
    return this.checkInService.claimReward(req.user);
  }
}
