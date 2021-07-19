import { Body, Controller, Get, Inject, onModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AssociateService } from 'src/services/associate/associate.service';
import { AssociateGrpcService } from './associate-grpc.interface';

@Controller('associate')
export class AssociateGrpcClientController implements onMoludeInit{
    constructor(@Inject('ASSOCIATE_PACKAGE') private client: ClientGrpc){}
    private associateGrpcService;

    onModuleInit() {
        this.associateGrpcService = this.client.getService<this.associateGrpcService>('AsssociateService');
    }

}