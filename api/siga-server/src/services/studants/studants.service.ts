import { User } from './../../schemas/user.schema';
import { Studant } from './../../schemas/studant.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudantsService {
    constructor(
        @InjectModel(Studant.name) private readonly studantModel: Model<Studant>,
        @InjectModel(User.name) private readonly userModel: Model<User>
    ) {} // injeta no mongoDB

    // Only to First Access
    async checkStudant(registration: string, rg: string) {
        let studant = await this.studantModel.findOne({ 'registration': registration }).populate(['people']).exec();
        if (studant == null){
            return { status: 'NO', message: 'INVALID DATA'};
        } else {
            let user = await this.userModel.findOne({ 'studantId': studant['_id']}).exec();
            if (user == null){
                let people = studant['people'];
                people = people[0].rg;
                return this.getStatus(people, rg, studant['_id']);
            } else {
                return { status: 'NO', message: 'STUDANT ALREADY REGISTERED'};
            }
        }
    }

    getStatus(rg1: string, rg2: string, studantId: string){
        if (rg1 == rg2){
            return { status: 'YES', studantId: studantId};
        } else if (rg1 != rg2){
            return { status: 'NO', message: 'DIVERGENT DATA'};
        }
    }
}
