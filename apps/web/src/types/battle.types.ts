import { IHero } from "./hero.types";

export interface IBattle {
  id: number;
  status: string;
  userName: string;
  userHealth: number;
  userHero: IHero;
  enemyName: string;
  enemyHealth: number;
  enemyHero: IHero;
  userAttack: number;
  enemyAttack: number;
}
