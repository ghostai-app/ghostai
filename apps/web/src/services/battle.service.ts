import { axiosWithAuth } from "@/lib";

class BattleService {
  private BASE_URL = "/battle";

  async damageEnemy(id: number, clicks: number) {
    const response = await axiosWithAuth.post(`${this.BASE_URL}/damage/${id}`, {
      clicks,
    });

    return response.data;
  }

  async getResults(id: number) {
    const response = await axiosWithAuth.get<{ winner: boolean }>(
      `${this.BASE_URL}/results/${id}`
    );

    return response.data;
  }
}

export const battleService = new BattleService();
