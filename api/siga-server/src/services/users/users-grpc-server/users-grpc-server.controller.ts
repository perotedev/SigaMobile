import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from '../users.service';

@Controller()
export class UsersGrpcServerController {
    constructor(private usersService: UsersService) {}

    @GrpcMethod('UsersService', 'Create')
    create(data){
        console.log('gRPC UsersService exec Create()');
        return this.usersService.create(data);
    };

    @GrpcMethod('UsersService', 'FindAll')
    async findAll(data){
        console.log('gRPC UsersService exex FindAll()')
        const users = await this.usersService.getAll();
        return { users };
    };

    @GrpcMethod('UsersService', 'GetById')
    getById(data){
        console.log('gRPC UsersService exex GetById()')
        return this.usersService.getById(data);
    };

    @GrpcMethod('UsersService', 'Update')
    update(data){
        console.log('gRPC UsersService exex Update()')
        return this.usersService.update(data._id, data);
    };

    @GrpcMethod('UsersService', 'Delete')
    delete(data){
        console.log('gRPC UsersService exex Delete()')
        return this.usersService.delete(data);
    };
}
