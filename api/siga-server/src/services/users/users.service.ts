import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {} // injeta no mongoDB

    // Only to JWT token
    async findUser(username: string) {
        return this.userModel.findOne({ 'username': username }).exec();
    }

    async getAll() {
        return await this.userModel.find().exec();
    }

    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async create(user: User) {
        const createdUser = new this.userModel(user);
        let isspecials = /[ `!@#$%^´&*()+\=\[\]{};':"\\|,<>\/?~]/.test(createdUser.username);
        let isnum = /^\d+$/.test(createdUser.username);
        if (isnum){
            return { status: 'NO', message: 'ONLY NUMBERS'};
        } else if(isspecials){
            return { status: 'NO', message: 'ESPECIAL CHARACTERS'};
        } else {
            let check = await this.findUser(createdUser.username);
            if (check == null){
                createdUser.passwordHash = await this.createPasswordHash(createdUser.passwordHash);
                return await createdUser.save();
            }
            else {
                return { status: 'NO', message: 'INDISPONIBLE USERNAME'};
            }
        }
    }

    async update(user: User) {
        user.passwordHash = await this.createPasswordHash(user.passwordHash);
        await this.userModel.updateOne({ _id: user._id}, user).exec();
        return this.getById(user._id);
    }

    async delete(id: string) {
        if(await this.userModel.deleteOne({ _id: id}).exec()){
            return { status: 'YES', message: 'SUCCESS' };
        } else {
            return { status: 'NO', message: 'ERROR' };
        };
    }

    async createPasswordHash(password: string){
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        return hash.toString();
    }
}