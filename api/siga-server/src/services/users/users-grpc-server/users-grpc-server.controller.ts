import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from '../users.service';

@Controller()
export class UsersGrpcServerController {
    constructor(private usersService: UsersService) {}

    @GrpcMethod('UsersService', 'Create')
    create(data){
        return this.usersService.create(data);
    };

    @GrpcMethod('UsersService', 'FindAll')
    async findAll(data){
        const users = await this.usersService.getAll();
        return { users };
    };

    @GrpcMethod('UsersService', 'GetById')
    getById(data){
        return this.usersService.getById(data.id);
    };

    @GrpcMethod('UsersService', 'Update')
    update(data){
        return this.usersService.update(data);
    };

    @GrpcMethod('UsersService', 'Delete')
    delete(data){
        return this.usersService.delete(data.id);
    };
}
