import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Listening on ' + config.PORT);
  await app.listen(config.PORT);
}
bootstrap();
