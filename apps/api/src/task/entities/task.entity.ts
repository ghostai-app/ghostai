import { ApiProperty } from '@nestjs/swagger';
import { Task, TaskType } from 'generated/prisma';

export class TaskEntity implements Task {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  reward: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  link: string | null;

  @ApiProperty()
  channelId: string;

  @ApiProperty()
  createdOn: Date;

  @ApiProperty()
  type: TaskType;
}
