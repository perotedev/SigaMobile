import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from '../users.service';

@Controller()
export class updateDataGrpcServerController {
    constructor(private updateDataService: updateDataService) {}

    @GrpcMethod('updateService', 'Create')
    create(data){
        return this.updateDataService.create(data);
    };

    @GrpcMethod('UpdateService', 'FindAll')
    async findAll(data){
        const users = await this.updateDataService.getAll();
        return { update };
    };

    @GrpcMethod('UpdateService', 'GetById')
    getById(data){
        return this.updateDataService.getById(data.id);
    };

    @GrpcMethod('UpdateService', 'Update')
    update(data){
        return this.updateDataService.update(data);
    };

    @GrpcMethod('UpdateService', 'Delete')
    delete(data){
        return this.updateDataService.delete(data.id);
    };
}
