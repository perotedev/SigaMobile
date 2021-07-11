import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({timestamps: true, versionKey: false, id: false})
export class ContaBanco extends Document{
  @Prop({ required: true })
  numConta: string;

  @Prop({ required: true })
  agConta: string;

  @Prop()
  operacao: string;

  @Prop({ required: true })
  instituicao: string;
}

export const ContaBancoSchema = SchemaFactory.createForClass(ContaBanco);