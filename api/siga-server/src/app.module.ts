import { StudantsModule } from './services/studants/studants.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@siga-mongo:27017/sigadatabase?authSource=admin'),
    AuthModule,
    UsersModule,
    StudantsModule,
    AssociateModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule { }
