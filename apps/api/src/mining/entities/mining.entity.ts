import { ApiProperty } from '@nestjs/swagger';

export class MiningEntity {
  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  amount?: number;

  @ApiProperty()
  expiresAt?: Date;

  @ApiProperty()
  startedAt?: Date;
}
