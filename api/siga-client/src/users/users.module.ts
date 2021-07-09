import { join } from 'path';
import { Module } from '@nestjs/common';
import { UsersGrpcClientController } from './users-grpc-client/users-grpc-client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'USERS_PACKAGE',
      transport: Transport.GRPC,
      options: {
        url: 'app-siga:50051',
        package: 'users',
        protoPath: join(__dirname, '/proto/users.proto')
      }
  }])],
  controllers: [ UsersGrpcClientController ]
})
export class UsersModule {}
