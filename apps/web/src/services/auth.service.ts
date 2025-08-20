import { axiosClassic } from "@/lib/api/interceptors";
import { IAuthParams, IAuthResponse } from "@/types";
import { saveTokenStorage } from "./auth-token.service";

class AuthService {
  private BASE_URL = "/auth";

  async auth(params: IAuthParams) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this.BASE_URL}/auth`,
      undefined,
      {
        headers: {
          Authorization: `tma ${params.initDataRaw}`,
        },
      }
    );

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken);
    }

    return response.data;
  }
}

export const authService = new AuthService();
