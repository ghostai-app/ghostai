export interface ICheckInDay {
  day: number;
  reward: number;
  current: boolean;
}

export interface IGetCheckInResponse {
  days: ICheckInDay[];
}

export interface ICheckInClaim {
  success: boolean;
}
