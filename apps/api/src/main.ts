import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('SamsaTop API')
    .setDescription('SamsaTop API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const clientUrls = configService
    .getOrThrow<string>('CLIENT_URLS')
    .split(',')
    .map((url) => url.trim())
    .filter((url) => url);

  app.enableCors({
    origin: clientUrls,
    exposedHeaders: [
      'Content-Range',
      'X-Total-Count',
      'Set-Cookie',
      'Authorization',
    ],
    credentials: true,
  });

  await app.startAllMicroservices();
  await app.listen(configService.get<number>('PORT', 8080));
}
bootstrap();
