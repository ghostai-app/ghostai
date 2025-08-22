import { IsString, IsNumber, IsUrl, Min, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHeroDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  health: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  attack: number;

  @ApiProperty()
  @IsString()
  @IsUrl()
  imageUrl: string;
}
