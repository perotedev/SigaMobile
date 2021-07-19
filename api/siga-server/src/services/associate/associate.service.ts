import { Studant } from './../../schemas/studant.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks } from 'src/schemas/tasks';

@Injectable()
export class AssociateService {
    constructor(
        @InjectModel(Studante) private readonly studantModel: Model<Studant>;
        @InjectModel(Tasks) private readonly tasksModel: Model<Tasks>;
    )

    asyn getAssociatedGrades() {
        const associated = await this.
    }
}