import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login-siga/login.module';

@Module({
  imports: [
    LoginModule,
    MongooseModule.forRoot('mongodb://root:example@mongo:27017/sigadatabase?authSource=admin')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
