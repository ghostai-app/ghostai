export interface ILeader {
  id: number;
  photoUrl: string;
  firstName: string;
  balance: number;
  rank: number;
  createdAt: Date;
}

export interface IGetLeaderboard {
  leaders: ILeader[];
  currentUser: ILeader;
}
