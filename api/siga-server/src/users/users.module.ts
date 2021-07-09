import { join } from 'path';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UsersService } from './users.service';
import { UsersGrpcServerController } from './users-grpc-server/users-grpc-server.controller';
import { UsersGrpcClientController } from './users-grpc-client/users-grpc-client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
    ClientsModule.register([{
      name: 'USERS_PACKAGE',
      transport: Transport.GRPC,
      options: {
        url: 'app-siga:50051',
        package: 'users',
        protoPath: join(__dirname, '/proto/users.proto')
      }
    }])
  ],
  controllers: [UsersController, UsersGrpcServerController, UsersGrpcClientController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}