// 하나의 모듈에서 어플리케이션을 실행
// AppModule은 모든 것의 루트 모듈 같은 것..
// 모듈은 어플리케이션의 일부분
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 데코레이터는 클래스에 함수 기능을 추가할 수 있다..
// NestJS는 데코레이터와 함께 함..
@Module({
  imports: [],
  // 컨트롤러는 기본적으로 url을 가져오고 함수를 실행함..
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
