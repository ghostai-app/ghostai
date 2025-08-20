export interface IMining {
  isActive: boolean;
  amount?: number;
  expiresAt?: Date;
  startedAt?: Date;
}

export interface IStartMiningResponse {
  success: boolean;
  expiresAt: Date;
  amount: number;
}

export interface IStopMiningResponse {
  success: boolean;
  amount: number;
}
