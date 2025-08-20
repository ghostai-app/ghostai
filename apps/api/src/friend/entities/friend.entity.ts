import { ApiProperty } from '@nestjs/swagger';

export class FriendEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  photoUrl: string;

  @ApiProperty()
  earned: number;

  @ApiProperty()
  createdOn: Date;
}
