import { Prop, Schema, SchemaFactory } from 'nestjs/mongoose';
import { Document, SchemaTypes, Types} from 'mongoose';

@Schema({timestamps: true, versioKey: false, toJSON: {virtuals: true}, id: false })
export class Tasks extends Document{
    @Prop({ required: true})
    turmaId: Types.ObjectId;

    @Prop({ required: true})
    descricao: string;

    @Prop({ required: true})
    createdAt: Date;

    @Prop({ required: true})
    updatedAt: Date;

    @Prop({ required: true})
    finishAt: Date;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);