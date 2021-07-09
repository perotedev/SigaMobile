import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UsersService } from './users.service';
import { UsersGrpcServerController } from './users-grpc-server/users-grpc-server.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])
  ],
  controllers: [UsersController, UsersGrpcServerController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}