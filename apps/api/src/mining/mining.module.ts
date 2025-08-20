import { Module } from '@nestjs/common';
import { MiningService } from './mining.service';
import { MiningController } from './mining.controller';
import { FriendModule } from 'src/friend/friend.module';

@Module({
  imports: [FriendModule],
  controllers: [MiningController],
  providers: [MiningService],
})
export class MiningModule {}
