import { Module } from '@nestjs/common';
import { ApiLoginController } from './api-login.controller';
import { ApiLoginService } from './shared/api-login.service';

@Module({
  controllers: [ApiLoginController],
  providers: [ApiLoginService]
})
export class ApiLoginModule {}
