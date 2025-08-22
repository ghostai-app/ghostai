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
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { transformQueryParams } from 'src/shared/utils/transform-query';
import { UserEntity } from 'src/user/entities/user.entity';
import { PriceType } from 'generated/prisma';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('buy/:id')
  @ApiOkResponse({ type: ProductEntity })
  @ApiBearerAuth()
  @Auth()
  buy(@Req() req: { user: UserEntity }, @Param('id', ParseIntPipe) id: number) {
    return this.productService.buyProduct(id, req.user);
  }

  @Get('user')
  @ApiOkResponse({ type: ProductEntity })
  @ApiBearerAuth()
  @Auth()
  getUserProducts(
    @Req() req: { user: UserEntity },
    @Query('type') type: PriceType,
  ) {
    return this.productService.getUserProducts(type, req.user);
  }

  @Post()
  @ApiOkResponse({ type: ProductEntity })
  @ApiBearerAuth()
  @AdminAuth()
  create(@Body() data: CreateProductDto) {
    return this.productService.create(data);
  }

  @Get()
  @ApiOkResponse()
  @ApiBearerAuth()
  @AdminAuth()
  async findAll(@Query() query: Record<string, string>) {
    const { items, total } = await this.productService.getAll(
      transformQueryParams(query),
    );

    return {
      data: items,
      total,
    };
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductEntity })
  @ApiBearerAuth()
  @AdminAuth()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getById(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProductEntity })
  @ApiBearerAuth()
  @AdminAuth()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProductDto,
  ) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProductEntity })
  @ApiBearerAuth()
  @AdminAuth()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
