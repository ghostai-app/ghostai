import { ApiProperty } from '@nestjs/swagger';
import { FriendEntity } from './friend.entity';

export class GetFriendsEntity {
  @ApiProperty()
  total: number;

  @ApiProperty()
  friends: FriendEntity[];

  @ApiProperty()
  referralLink: string;
}
