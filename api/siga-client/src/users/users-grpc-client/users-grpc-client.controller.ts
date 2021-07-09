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
    // @Get()
    // getAll(): Promise<User[]> {
    //     return this.usersService.getAll();
    // }

    // // @UseGuards(JwtAuthGuard)
    // @Get(':id')
    // getById(@Param('id') id: string): Promise<User> {
    //     return this.usersService.getById(id);
    // }

    // @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data){
        return this.usersGrpcService.create(data).toPromise();
    }

    // // @UseGuards(JwtAuthGuard)
    // @Put()
    // update(@Body('_id') id: string, @Body() user: User): Promise<User> {
    //     return this.usersService.update(id, user);
    // }

    // // @UseGuards(JwtAuthGuard)
    // @Delete()
    // delete(@Body('id') id: string){
    //     this.usersService.delete(id);
    // }
}
