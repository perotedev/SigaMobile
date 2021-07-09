import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from '../user.schema';
import { UsersService } from '../users.service';

@Controller()
export class UsersGrpcServerController {
    constructor(private usersService: UsersService) {}

    @GrpcMethod('UsersService', 'Create')
    create(data, metadata: Metadata, call: ServerUnaryCall<any, any>){
        console.log(data);
        return this.usersService.create(data);
    };
}
