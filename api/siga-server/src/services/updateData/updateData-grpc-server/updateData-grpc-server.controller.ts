import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from '../users.service';

@Controller()
export class updateDataGrpcServerController {
    constructor(private updateDataService: UpdateService) {}

    @GrpcMethod('updateService', 'Create')
    create(data){
        return this.updateService.create(data);
    };

    @GrpcMethod('UpdateService', 'FindAll')
    async findAll(data){
        const users = await this.updateService.getAll();
        return { update };
    };

    @GrpcMethod('UpdateService', 'GetById')
    getById(data){
        return this.updateService.getById(data.id);
    };

    @GrpcMethod('UpdateService', 'Update')
    update(data){
        return this.updateService.update(data);
    };

    @GrpcMethod('UpdateService', 'Delete')
    delete(data){
        return this.updateService.delete(data.id);
    };
}
