
import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login-siga')
    async login(@Request() req: any){
        return req.user;
    }
}
