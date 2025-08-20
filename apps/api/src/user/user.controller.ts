import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AdminAuth } from 'src/admin/decorators/auth.decorator';
import { Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ApiOkResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Req } from '@nestjs/common';
import { transformQueryParams } from 'src/shared/utils/transform-query';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @ApiOkResponse({ type: UserEntity })
  @Auth()
  getMe(@Req() req: { user: UserEntity }): UserEntity {
    return req.user;
  }

  @Get()
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  async findAll(@Query() query: Record<string, string>) {
    const { items, total } = await this.userService.getAll(
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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }

  @Patch(':id')
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
