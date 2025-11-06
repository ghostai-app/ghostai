import { axiosWithAuth } from "@/lib";
import { ICheckInClaim, IGetCheckInResponse } from "@/types";

class CheckInService {
  private BASE_URL = "/check-in";

  async getCheckIn() {
    const response = await axiosWithAuth.get<IGetCheckInResponse>("/check-in");

    // Ensure we return the data with days array
    const data = response.data;

    // If response has days, return it, otherwise log for debugging
    if (data && "days" in data && Array.isArray(data.days)) {
      return data;
    }

    // Log if structure is unexpected
    console.warn("Unexpected check-in response structure:", data);

    // Return data as-is (might be old format or error)
    return data;
  }

  async claimCheckIn() {
    const response = await axiosWithAuth.post<ICheckInClaim>("/check-in");

    return response.data;
  }
}

export const checkInService = new CheckInService();
