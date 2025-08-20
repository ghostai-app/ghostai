import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.getOrThrow<string>('DATABASE_URL'),
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
    } catch {
      throw new Error('Failed to connect to the database');
    }
  }
}
