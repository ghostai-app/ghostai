import { axiosWithAuth } from "@/lib";
import { IUser } from "@/types";

class UserService {
  private BASE_URL = "/user";

  async getMe() {
    const response = await axiosWithAuth.get<IUser>(`/user/me`);

    return response.data;
  }
}

export const userService = new UserService();
