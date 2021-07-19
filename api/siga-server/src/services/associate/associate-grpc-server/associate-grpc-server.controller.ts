import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AssociateService } from '../associate.service';

@Controller
export class AssociateGrpcServerController {
    constructor(private associateService: AssociateService) {}

    @GrpcMethod('AssociateService', '')
}