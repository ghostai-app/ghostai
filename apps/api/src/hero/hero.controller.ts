import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Patch,
  Query,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { AdminAuth } from 'src/admin/decorators/auth.decorator';
import { HeroService } from './hero.service';
import { HeroEntity } from './entities/hero.entity';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { transformQueryParams } from 'src/shared/utils/transform-query';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get('all')
  getAllHeroes() {
    return this.heroService.returnHeroes();
  }

  @Get('user')
  @ApiOkResponse({ type: [HeroEntity] })
  @ApiBearerAuth()
  @Auth()
  getUserHeroes(@Req() req: { user: UserEntity }) {
    return this.heroService.getUserHeroes(req.user);
  }

  @Post()
  @ApiOkResponse({ type: HeroEntity })
  @ApiBearerAuth()
  @AdminAuth()
  create(@Body() data: CreateHeroDto) {
    return this.heroService.create(data);
  }

  @Get()
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  async findAll(@Query() query: Record<string, string>) {
    const { items, total } = await this.heroService.getAll(
      transformQueryParams(query),
    );

    return {
      data: items,
      total,
    };
  }

  @Get(':id')
  @ApiOkResponse({ type: HeroEntity })
  @ApiBearerAuth()
  @AdminAuth()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.getById(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: HeroEntity })
  @ApiBearerAuth()
  @AdminAuth()
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateHeroDto) {
    return this.heroService.update(id, data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: HeroEntity })
  @ApiBearerAuth()
  @AdminAuth()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.remove(id);
  }
}
