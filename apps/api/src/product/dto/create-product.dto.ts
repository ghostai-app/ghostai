import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PriceType, ProductType } from 'generated/prisma';

export class CreateProductDto {
  @ApiProperty({ example: 'Магический меч', description: 'Название продукта' })
  name: string;

  @ApiProperty({ example: 1000, description: 'Цена продукта' })
  price: number;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'URL изображения продукта',
  })
  imageUrl: string;

  @ApiProperty({
    example: 'TOKEN',
    enum: ['TOKEN', 'CRYSTAL'],
    description: 'Тип валюты для покупки',
  })
  priceType: PriceType;

  @ApiProperty({
    example: 1,
    description: 'ID героя',
  })
  @IsOptional()
  heroId?: number;

  @ApiProperty({
    example: 'HERO',
    enum: ['HERO'],
    description: 'Тип продукта',
  })
  type: ProductType;

  @ApiProperty({
    example: 100,
    description: 'Здоровье героя',
  })
  health?: number;

  @ApiProperty({
    example: 100,
    description: 'Атака героя',
  })
  attack?: number;
}
