import { ApiProperty } from '@nestjs/swagger';
import { Hero } from 'generated/prisma';

export class HeroEntity implements Hero {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  health: number;

  @ApiProperty()
  attack: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  createdAt: Date;
}
