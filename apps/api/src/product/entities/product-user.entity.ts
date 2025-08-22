import { ApiProperty } from '@nestjs/swagger';

export class ProductUserEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  isBought: boolean;
}
