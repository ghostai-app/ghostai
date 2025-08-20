import {
  IsString,
  IsNumber,
  IsOptional,
  IsUrl,
  Min,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  reward: number;

  @ApiProperty()
  @IsString()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsUrl()
  link?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(100)
  channelId?: string;
}
