export type TaskType = "DEFAULT" | "PARTNER";

export type TaskStatus = "IN_PROGRESS" | "COMPLETED";

export interface ITask {
  id: number;
  title: string;
  reward: number;
  imageUrl: string;
  link?: string;
  channelId?: string;
  createdOn: Date;
  type: TaskType;
  status?: TaskStatus;
}
