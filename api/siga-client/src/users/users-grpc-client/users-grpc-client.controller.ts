import { Body, Controller, Delete, Get, Inject, OnModuleInit, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UsersGrpcService } from './users-grpc-interface';

@Controller('users')
export class UsersGrpcClientController implements OnModuleInit {
    constructor(@Inject('USERS_PACKAGE') private client: ClientGrpc){}
    private usersGrpcService;

    onModuleInit() {
        this.usersGrpcService = this.client.getService<UsersGrpcService>('UsersService');
    }

    // // @UseGuards(JwtAuthGuard)
    @Get()
    findAll(data){
        return this.usersGrpcService.findAll(data).toPromise();
    }

    // // @UseGuards(JwtAuthGuard)
    @Get(':id')
    getById(@Param('id') id: string) {
        return this.usersGrpcService.getById(id).toPromise();
    }

    // @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data){
        return this.usersGrpcService.create(data).toPromise();
    }

    // // @UseGuards(JwtAuthGuard)
    @Put()
    update(@Body('_id') id: string, @Body() data) {
        return this.usersGrpcService.update(id, data).toPromise();
    }

    // // @UseGuards(JwtAuthGuard)
    @Delete()
    delete(@Body('id') id: string){
        this.usersGrpcService.delete(id).toPromise();
    }
}
