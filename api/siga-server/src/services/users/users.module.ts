
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UsersService } from './users.service';
import { UsersGrpcServerController } from './users-grpc-server/users-grpc-server.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UsersGrpcClientController } from 'src/controllers/users-grpc-client/users-grpc-client.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
    ClientsModule.register([{
      name: 'USERS_PACKAGE',
      transport: Transport.GRPC,
      options: {
        url: 'siga-server:50051',
        package: 'users',
        protoPath: join(__dirname, '/proto/users.proto')
      }
    }])
  ],
  controllers: [
    UsersGrpcServerController,
    UsersGrpcClientController
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}