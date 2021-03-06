import { AuthService } from '../auth.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class JwtGrpcServerController {
    constructor(private authService: AuthService){}

    @GrpcMethod('AuthService', 'Login')
    login(data){
        return this.authService.login(data);
    };
}
