import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IQueryOptions } from 'src/shared/types/query-options.types';
import { PriceType, ProductType } from 'generated/prisma';
import { ProductUserEntity } from './entities/product-user.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async buyProduct(productId: number, user: UserEntity) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (product.priceType === PriceType.CRYSTAL) {
      if (user.crystal < product.price) {
        throw new BadRequestException('Not enough crystals');
      }
    } else {
      if (user.balance < product.price) {
        throw new BadRequestException('Not enough balance');
      }
    }

    await this.prisma.$transaction(async (prisma) => {
      if (product.priceType === PriceType.CRYSTAL) {
        await prisma.user.update({
          where: { id: user.id },
          data: { crystal: { decrement: product.price } },
        });
      } else {
        await prisma.user.update({
          where: { id: user.id },
          data: { balance: { decrement: product.price } },
        });
      }

      if (product.type === ProductType.HERO && product.heroId) {
        const hero = await prisma.hero.findUnique({
          where: { id: product.heroId },
        });

        if (!hero) {
          throw new NotFoundException('Hero not found');
        }

        await prisma.userHero.create({
          data: {
            userId: user.id,
            heroId: product.heroId,
          },
        });
      }

      await prisma.userProduct.create({
        data: {
          userId: user.id,
          productId,
        },
      });
    });

    return {
      success: true,
    };
  }

  async getUserProducts(
    type: PriceType,
    user: UserEntity,
  ): Promise<ProductUserEntity[]> {
    const products = await this.prisma.product.findMany({
      where: {
        priceType: type,
      },
      orderBy: {
        price: 'asc',
      },
      select: {
        id: true,
        imageUrl: true,
        name: true,
        price: true,
        createdAt: true,
        type: true,
        userProducts: {
          where: {
            userId: user.id,
          },
        },
      },
    });

    const result = products.map((product) => ({
      ...product,
      isBought: product.userProducts.length > 0,
    }));

    return result.sort((a, b) => {
      // Сортируем так, чтобы купленные (isBought: true) были первыми
      if (a.isBought === b.isBought) return 0;
      return a.isBought ? -1 : 1;
    });
  }

  async create(data: CreateProductDto) {
    return await this.prisma.product.create({
      data,
    });
  }

  async getAll(params: IQueryOptions) {
    const { page = 1, per_page = 10, filters, sorters } = params;

    const skip = (page - 1) * per_page;
    const take = Number(per_page);

    const where: Record<string, unknown> = {};
    if (filters?.length) {
      filters.forEach(({ field, operator, value }) => {
        switch (operator) {
          case 'eq':
            where[field] = { equals: value };
            break;
          case 'contains':
            where[field] = { contains: value, mode: 'insensitive' };
            break;
        }
      });
    }

    const orderBy: Record<string, 'asc' | 'desc'> = {};
    if (sorters?.length) {
      sorters.forEach(({ field, order }) => {
        orderBy[field] = order.toLowerCase() as 'asc' | 'desc';
      });
    }

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take,
        where,
        orderBy,
      }),
      this.prisma.product.count({ where }),
    ]);

    return { items, total };
  }

  async getById(id: number) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({ where: { id } });
  }
}
