import { axiosWithAuth } from "@/lib";
import { IRouletteItem, ISpinResponse } from "@/types";

class RouletteService {
  private BASE_URL = "/roulette";

  async getItems(): Promise<IRouletteItem[]> {
    const response =
      await axiosWithAuth.get<IRouletteItem[]>(`/roulette/items`);

    return response.data;
  }

  async spin(): Promise<ISpinResponse> {
    const response = await axiosWithAuth.post<ISpinResponse>(`/roulette/spin`);

    return response.data;
  }
}

export const rouletteService = new RouletteService();
