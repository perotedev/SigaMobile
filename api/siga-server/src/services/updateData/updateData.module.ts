
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnderecoSchema } from '../../schemas/endereco.schema';
import { TelefoneSchema } from '../../schemas/telefone.schema';
import { ContaBancoSchema } from '../../schemas/conta-banco.schema';
import { updateDataService } from './updateData.service';
import { updateDataGrpcServerController } from './updateData-grpc-server/updateData-grpc-server.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { updateDataGrpcClientController } from 'src/controllers/updateData-grpc-client/updateData-grpc-client.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Endereco', schema: EnderecoSchema, }]),
    ClientsModule.register([{
      name: 'UPDATEDATA_PACKAGE',
      transport: Transport.GRPC,
      options: {
        url: 'siga-server:50051',
        package: 'updateData',
        
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