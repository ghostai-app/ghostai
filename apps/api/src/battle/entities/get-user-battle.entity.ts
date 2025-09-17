import { ApiProperty } from '@nestjs/swagger';
import { BattleStatus } from 'generated/prisma';
import { HeroEntity } from 'src/hero/entities/hero.entity';

export class GetUserBattleEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  status: BattleStatus;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  userHealth: number;

  @ApiProperty()
  userAttack: number;

  @ApiProperty()
  userHero: HeroEntity;

  @ApiProperty()
  enemyName: string;

  @ApiProperty()
  enemyHealth: number;

  @ApiProperty()
  enemyAttack: number;

  @ApiProperty()
  enemyHero: HeroEntity;
}
