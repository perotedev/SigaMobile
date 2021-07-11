import { Controller, Inject, Post, UseGuards, Request, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { LocalAuthGuard } from '../../services/auth/local-auth.guard';
import { AuthGrpcService } from './auth-grpc-interface';

@Controller()
export class AuthGrpcClientController  implements OnModuleInit {
    constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc){}
    private authGrpcService;

    onModuleInit() {
        this.authGrpcService = this.client.getService<AuthGrpcService>('AuthService');
    }

    @UseGuards(LocalAuthGuard)
    @Post('siga-login')
    async login(@Request() data){
        return this.authGrpcService.login(data).toPromise();
    }
}