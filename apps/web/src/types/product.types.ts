export type ProductType = "TOKEN" | "CRYSTAL";

export interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  createdAt: Date;
  isBought: boolean;
  health: number;
  attack: number;
}
