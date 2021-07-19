
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
    MongooseModule.forFeature([{ endereco: 'Endereco', schema: EnderecoSchema, }]),
    ClientsModule.register([{
      endereco: 'ENDERECO_PACKAGE',
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

@Module({
  imports:[
    MongooseModule.forFeature([{ telefone: 'Telefone', schema: TelefoneSchema, }]),
    ClientsModule.register([{
      endereco: 'TELEFONE_PACKAGE',
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

@Module({
  imports:[
    MongooseModule.forFeature([{ contaBanco: 'ContaBanco', schema: ContaBancoSchema, }]),
    ClientsModule.register([{
      endereco: 'CONTABANCO_PACKAGE',
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