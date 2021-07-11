import { Studant } from './../../schemas/studant.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudantsService {
    constructor(
        @InjectModel(Studant.name) private readonly studantModel: Model<Studant>) {} // injeta no mongoDB

    // Only to First Access
    async checkStudant(registration: string, rg: string) {
        let studant = await this.studantModel.findOne({ 'registration': registration }).populate(['people']).exec();
        let people = studant['people'];
        let check = false;

        if (people.rg == rg){
            check = true;
        }

        if (check != false){
            return { status: 'YES', message: 'GRANTED'};
        } else {
            return { status: 'NO', message: 'DENIED'};
        }
    }
}
