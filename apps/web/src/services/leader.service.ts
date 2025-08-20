import { axiosWithAuth } from "@/lib";
import { IGetLeaderboard } from "@/types";

class LeaderService {
  private BASE_URL = "/leader";

  async getLeaderboard() {
    const response = await axiosWithAuth.get<IGetLeaderboard>(this.BASE_URL);

    return response.data;
  }
}

export const leaderService = new LeaderService();
