export interface IFriend {
  id: number;
  firstName: string;
  photoUrl: string;
  earned: number;
  createdAt: Date;
}

export interface IGetFriends {
  total: number;
  friends: IFriend[];
  referralLink: string;
}
