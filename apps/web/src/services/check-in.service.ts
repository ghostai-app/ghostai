import { axiosWithAuth } from "@/lib";
import { ICheckInClaim, IGetCheckInResponse } from "@/types";

class CheckInService {
  private BASE_URL = "/check-in";

  async getCheckIn() {
    const response = await axiosWithAuth.get<IGetCheckInResponse>("/check-in");

    return response.data;
  }

  async claimCheckIn() {
    const response = await axiosWithAuth.post<ICheckInClaim>("/check-in");

    return response.data;
  }
}

export const checkInService = new CheckInService();
