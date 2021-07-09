import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This Client is Running in Port 4000 :)';
  }
}
