import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema({timestamps: true, versionKey: false, toJSON: { virtuals: true }, id: false})
export class Studant extends Document{
  @Prop({ required: true })
  registration: string;

  @Prop({type: SchemaTypes.ObjectId , ref: 'People', required: true })
  peopleId: Types.ObjectId;

  @Prop({type: SchemaTypes.ObjectId , ref: 'Curso', required: true })
  cursoId: Types.ObjectId;
}

export const StudantSchema = SchemaFactory.createForClass(Studant);
StudantSchema.virtual('tasks', {
    ref: 'StudantTask',
    localField: '_id',
    foreignField: 'studentId'
});
StudantSchema.virtual('people', {
  ref: 'People',
  localField: 'peopleId',
  foreignField: '_id'
});