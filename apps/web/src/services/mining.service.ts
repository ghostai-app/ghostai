import { axiosWithAuth } from "@/lib";
import {
  IMining,
  IStartMiningResponse,
  IStopMiningResponse,
} from "@/types/mining.types";

class MiningService {
  private BASE_URL = "/mining";

  async getMining(): Promise<IMining> {
    const response = await axiosWithAuth.get<IMining>(`/mining`);

    return response.data;
  }

  async startMining(): Promise<IStartMiningResponse> {
    const response =
      await axiosWithAuth.post<IStartMiningResponse>(`/mining/start`);

    return response.data;
  }

  async stopMining(): Promise<IStopMiningResponse> {
    const response =
      await axiosWithAuth.post<IStopMiningResponse>(`/mining/stop`);

    return response.data;
  }
}

export const miningService = new MiningService();
