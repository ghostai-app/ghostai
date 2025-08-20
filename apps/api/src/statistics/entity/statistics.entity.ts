import { ApiProperty } from '@nestjs/swagger';

export class StatisticsEntity {
  @ApiProperty()
  totalUsers: number;

  @ApiProperty()
  dailyUsers: number;

  @ApiProperty()
  monthlyUsers: number;

  @ApiProperty()
  totalMining: number;

  @ApiProperty()
  dailyMining: number;

  @ApiProperty()
  monthlyMining: number;
}
