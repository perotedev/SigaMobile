import { AuthService } from './auth.service';

import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login-siga')
    async login(@Request() req: any){
        return this.authService.login(req.user);
    }
}
