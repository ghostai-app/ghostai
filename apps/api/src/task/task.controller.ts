import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Patch,
  Req,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { AdminAuth } from 'src/admin/decorators/auth.decorator';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { transformQueryParams } from 'src/shared/utils/transform-query';
import { TaskType } from 'generated/prisma';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('start/:id')
  @ApiOkResponse({ type: Boolean })
  @ApiBearerAuth()
  @Auth()
  startTask(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: { user: UserEntity },
  ) {
    return this.taskService.startTask(id, req.user);
  }

  @Post('check/:id')
  @ApiOkResponse({ type: Boolean })
  @ApiBearerAuth()
  @Auth()
  checkTask(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: { user: UserEntity },
  ) {
    return this.taskService.checkTask(id, req.user);
  }

  @Get('all')
  @ApiOkResponse()
  @ApiBearerAuth()
  @Auth()
  getAllToUser(
    @Req() req: { user: UserEntity },
    @Query('type') type: TaskType = 'DEFAULT',
  ) {
    return this.taskService.getAllToUser(req.user, type);
  }

  @Post()
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  create(@Body() data: CreateTaskDto) {
    return this.taskService.create(data);
  }

  @Get()
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  async findAll(@Query() query: Record<string, string>) {
    const { items, total } = await this.taskService.getAll(
      transformQueryParams(query),
    );

    return {
      data: items,
      total,
    };
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getById(id);
  }

  @Patch(':id')
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTaskDto) {
    return this.taskService.update(id, data);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(id);
  }
}
