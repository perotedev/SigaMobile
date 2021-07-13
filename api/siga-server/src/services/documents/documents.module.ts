import { DocumentsService } from './documents.service';
import { Module } from '@nestjs/common';
import { DocumentsGrpcServerController } from './documents-grpc-server/documents-grpc-server.controller';
import { DocumentsGrpcClientController } from 'src/controllers/documents-grpc-client/documents-grpc-client.controller';

@Module({
    imports: [],
    controllers: [DocumentsGrpcServerController, DocumentsGrpcClientController],
    providers: [
        DocumentsService,],
})
export class DocumentsModule { }
