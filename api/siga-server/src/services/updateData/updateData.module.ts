
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnderecoSchema } from '../../schemas/endereco.schema';
import { TelefoneSchema } from '../../schemas/telefone.schema';
import { ContaBancoSchema } from '../../schemas/conta-banco.schema';
import { UsersService } from './users.service';
import { UsersGrpcServerController } from './users-grpc-server/users-grpc-server.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UsersGrpcClientController } from 'src/controllers/users-grpc-client/users-grpc-client.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Endereco', schema: EnderecoSchema, }]),
    ClientsModule.register([{
      name: 'UPDATEDATA_PACKAGE',
      transport: Transport.GRPC,
      options: {
        url: 'siga-server:50051',
        package: 'updateData',
        protoPath: join(__dirname, '/proto/users.proto')
      }
    }])
  ],
  controllers: [
    updateDataGrpcServerController,
    updateDataGrpcClientController
  ],
  providers: [updateDataService],
  exports: [updateDataService],
})
export class updateData {}