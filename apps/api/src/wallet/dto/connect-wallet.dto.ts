import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ConnectWalletDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  wallet: string;
}
