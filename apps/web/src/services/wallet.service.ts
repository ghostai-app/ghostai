import { axiosWithAuth, WalletSchema } from "@/lib";

class WalletService {
  private BASE_URL = "/wallet";

  async connect(params: WalletSchema): Promise<void> {
    const response = await axiosWithAuth.post<void>(`/wallet/connect`, params);

    return response.data;
  }

  async disconnect(): Promise<void> {
    const response = await axiosWithAuth.post<void>(`/wallet/disconnect`);

    return response.data;
  }
}

export const walletService = new WalletService();
