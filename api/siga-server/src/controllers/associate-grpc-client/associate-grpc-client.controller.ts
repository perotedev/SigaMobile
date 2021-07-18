import { Body, Controller, Get, Inject, onModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AssociateGrpcService } from './associate.grpc.interface';

@Controller()
export class AssociateGrpcServiceController implements onMoludeInit{
    constructor(@Inject)
}