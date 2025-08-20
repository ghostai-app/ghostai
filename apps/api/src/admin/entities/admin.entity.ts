import { ApiProperty } from '@nestjs/swagger';

export class AdminEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
