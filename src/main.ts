// NestJS는 무조건 main.ts 이름의 파일을 가져야함.
// NestJS 어플리케이션은 main.ts에서 시작함
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
