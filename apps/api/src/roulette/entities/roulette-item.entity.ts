import { ApiProperty } from '@nestjs/swagger';

export class RouletteItemEntity {
  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  index: number;
}
