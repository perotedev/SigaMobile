import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnderecoSchema } from '../../schemas/endereco.schema';
import { TelefoneSchema } from '../../schemas/telefone.schema';
import { ContaBancoSchema } from '../../schemas/conta-banco.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class updateDataService {
    constructor(@InjectModel(EnderecoSchema.name) private readonly userModel: Model<endereco>) {} // injeta no mongoDB

    async findUser(endereco: string) {
        return this.userModel.findOne({ 'endereco': endereco }).exec();
    }

    async getAll() {
        return await this.userModel.find().exec();
    }

    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    
    constructor(@InjectModel(TelefoneSchema.name) private readonly userModel: Model<Telefone>) {} // injeta no mongoDB

    async findUser(endereco: string) {
        return this.userModel.findOne({ 'endereco': endereco }).exec();
    }

    async getAll() {
        return await this.userModel.find().exec();
    }

    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async create(updateData: Update) {
        const createdUser = new this.userModel(updateData);
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
