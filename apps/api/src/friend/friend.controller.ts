import { Controller, Get, Req } from '@nestjs/common';
import { FriendService } from './friend.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get()
  @ApiOkResponse()
  @ApiBearerAuth()
  @Auth()
  getFriendsInfo(@Req() req: { user: UserEntity }) {
    return this.friendService.getFriends(req.user);
  }
}
