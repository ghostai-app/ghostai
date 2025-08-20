import { ApiProperty } from '@nestjs/swagger';
import { TaskEntity } from './task.entity';
import { TaskStatus } from 'generated/prisma';

export class UserTaskEntity extends TaskEntity {
  @ApiProperty()
  status: TaskStatus;
}
