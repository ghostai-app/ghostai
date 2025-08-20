import { Module } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { CheckInController } from './check-in.controller';
import { TelegramModule } from 'src/telegram/telegram.module';

@Module({
  imports: [TelegramModule],
  controllers: [CheckInController],
  providers: [CheckInService],
})
export class CheckInModule {}
