import { axiosWithAuth } from "@/lib";
import { IGetFriends } from "@/types";

class FriendService {
  private BASE_URL = "/friend";

  async getFriends() {
    const response = await axiosWithAuth.get<IGetFriends>(`${this.BASE_URL}`);

    return response.data;
  }
}

export const friendService = new FriendService();
