import { IsNumber, IsOptional } from 'class-validator';
import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  photoUrl?: string;

  @IsString()
  @IsOptional()
  telegramLanguage?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsNumber()
  @IsOptional()
  balance?: number;

  @IsNumber()
  @IsOptional()
  miningTimeInSeconds?: number;

  @IsNumber()
  @IsOptional()
  profitPerSecond?: number;

  @IsNumber()
  @IsOptional()
  ticketCount?: number;
}
