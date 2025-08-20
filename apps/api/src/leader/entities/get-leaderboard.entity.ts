import { LeaderEntity } from './leader.entity';

export class GetLeaderboardEntity {
  leaders: LeaderEntity[];
  currentUser: LeaderEntity;
}
