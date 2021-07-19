import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { updateDataService } from '../updateData.service';

@Controller()
export class updateDataGrpcServerController {
    constructor(private updateDataService: updateDataService){}

    @GrpcMethod('UpdateService', 'Update')
    updateEndereco(data){
        return this.updateDataService.updateEndereco(data);
    };

    @GrpcMethod('UpdateService', 'Update')
    updateNumero(data){

        return this.updateDataService.updateNumero(data);
    };

    @GrpcMethod('UpdateService', 'Update')
    updateDados(data){
        return this.updateDataService.updateDados(data);
    };
}
