export interface ICheckInDay {
  day: number;
  reward: number;
  current: boolean;
}

export interface IGetCheckInResponse {
  reward: number;
}

export interface ICheckInClaim {
  success: boolean;
}
