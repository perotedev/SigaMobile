import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiLoginModule } from './api-login/api-login.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@mongo:27017/devtest?authSource=admin'),
    ApiLoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
