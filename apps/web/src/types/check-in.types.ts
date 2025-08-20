export interface ICheckInDay {
  day: number;
  reward: number;
  current: boolean;
}

export interface IGetCheckInResponse {
  days: ICheckInDay[];
  subscribed: boolean;
}

export interface ICheckInClaim {
  success: boolean;
}
