import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TelegramModule } from 'src/telegram/telegram.module';

@Module({
  imports: [TelegramModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
