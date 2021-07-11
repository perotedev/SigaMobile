import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema({timestamps: true, versionKey: false, id: false})
export class Telefone extends Document{
  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  numero: string;

  @Prop({type: SchemaTypes.ObjectId , ref: 'People', required: true })
  peopleId: Types.ObjectId;
}

export const TelefoneSchema = SchemaFactory.createForClass(Telefone);