import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UsersGrpcService {
    create(data: {
        username: string;
        password_hash: string;
        student_id: string;
    }): Observable<any>;
}

@Controller('users-grpc-client')
export class UsersGrpcClientController implements OnModuleInit {
    constructor(@Inject('USERS_PACKAGE') private client: ClientGrpc){}
    private usersGrpcService;

    onModuleInit() {
        this.usersGrpcService = this.client.getService<UsersGrpcService>('UsersService');
    }

    @Post()
    create(@Body() data){
        return this.usersGrpcService.create(data).toPromise();
    }
}
