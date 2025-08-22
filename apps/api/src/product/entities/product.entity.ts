import { ApiProperty } from '@nestjs/swagger';
import { Product, PriceType, ProductType } from 'generated/prisma';

export class ProductEntity implements Product {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  heroId: number | null;

  @ApiProperty()
  priceType: PriceType;

  @ApiProperty()
  type: ProductType;
}
