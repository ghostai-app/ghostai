import { ApiProperty } from '@nestjs/swagger';
import { User } from 'generated/prisma';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  telegramId: string;

  @ApiProperty()
  username: string | null;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string | null;

  @ApiProperty()
  photoUrl: string | null;

  @ApiProperty()
  telegramLanguage: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastLoginAt: Date;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  crystal: number;

  @ApiProperty()
  miningTimeInSeconds: number;

  @ApiProperty()
  miningProfit: number;

  @ApiProperty()
  isPremium: boolean;

  @ApiProperty()
  walletAddress: string | null;

  // @ApiProperty()
  // ticketCount: number;

  @ApiProperty()
  streak: number;

  @ApiProperty()
  dailyAvaliable: boolean;
}
