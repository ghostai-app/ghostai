import { axiosWithAuth } from "@/lib";
import { IHero } from "@/types/hero.types";

class HeroService {
  async getUserHeroes(): Promise<IHero[]> {
    const response = await axiosWithAuth.get<IHero[]>("/hero/user");
    return response.data;
  }
}

export const heroService = new HeroService();
