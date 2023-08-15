import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product.module';
// import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  // const configService = app.get(ConfigService);
  await app.listen(3003);
}
bootstrap();
