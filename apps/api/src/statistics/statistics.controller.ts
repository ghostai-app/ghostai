import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { StatisticsEntity } from './entity/statistics.entity';
import { AdminAuth } from 'src/admin/decorators/auth.decorator';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('dashboard')
  @ApiOkResponse({ type: StatisticsEntity })
  @AdminAuth()
  async getStatistics(): Promise<StatisticsEntity> {
    return this.statisticsService.getStatistics();
  }
}
