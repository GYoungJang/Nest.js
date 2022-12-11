// 서비스는 비지니스 로직을 실행하는 역할
// 서비스는 실제 function을 가지는 부분
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHi(): string {
    return 'Hi Nest';
  }
}
