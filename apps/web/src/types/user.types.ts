export interface IUser {
  id: number;
  telegramId: string;
  username: string | null;
  firstName: string;
  lastName: string | null;
  photoUrl: string | null;
  telegramLanguage: string;
  createdAt: Date;
  lastLoginAt: Date;
  balance: number;
  walletAddress: string | null;
  ticketCount: number;
  dailyAvaliable: boolean;
  streak: number;
  crystal: number;
}
