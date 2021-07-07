
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { User } from './user.schema';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    // Métodos da API
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<User[]> {
    return this.usersService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Body('_id') id: string, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async delete(@Body('id') id: string){
    this.usersService.delete(id);
    }
}
