import { IUser } from "./user.types";

export interface IAuthParams {
  initDataRaw: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}
