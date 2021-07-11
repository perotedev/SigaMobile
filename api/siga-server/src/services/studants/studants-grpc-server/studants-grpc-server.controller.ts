import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { StudantsService } from '../studants.service';

@Controller()
export class StudantsGrpcServerController {
    constructor(private studantsService: StudantsService) {}

    @GrpcMethod('StudantsService', 'CheckStudant')
    checkStudant(data){
        return this.studantsService.checkStudant(data.registration, data.rg);
    };
}
