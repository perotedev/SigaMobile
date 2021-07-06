import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';
import { use } from 'passport';

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
        createdUser.password_hash = await this.createPasswordHash(createdUser.password_hash);
        return await createdUser.save();
    }

    async update(id: string, user: User) {
        user.password_hash = await this.createPasswordHash(user.password_hash);
        await this.userModel.updateOne({ _id: id}, user).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.userModel.deleteOne({ _id: id}).exec();
    }

    async createPasswordHash(password: string){
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        return hash.toString();
    }
}