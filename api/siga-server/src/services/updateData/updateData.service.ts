import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnderecoSchema } from '../../schemas/endereco.schema';
import { TelefoneSchema } from '../../schemas/telefone.schema';
import { ContaBancoSchema } from '../../schemas/conta-banco.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class updateDataService {
    constructor(@InjectModel(EnderecoSchema.name) private readonly enderecoModel: Model<endereco>, 
                @InjectModel(TelefoneSchema.name) private readonly telefoneModel: Model<telefone>,
                @InjectModel (ContaBancoSchema.name) private readonly contaBancoModel: Model<contaBanco>
    
    ) {}

    async updateEndereco(endereco: string) {
        return this.enderecoModel.findOne({ 'endereco': endereco }).exec();
    }

    async updateNumero(telefone: string) {
        return this.telefoneModel.findOne({ 'telefone': telefone }).exec();
    }

    async updateDados(contaBanco: string) {
        return this.contaBancoModel.findOne({ 'Conta do Banco': contaBanco }).exec();
    }
    
}

