import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({timestamps: true, versionKey: false, id: false})
export class Endereco extends Document{
  @Prop({ required: true })
  logradouro: string;

  @Prop({ required: true })
  numero: string;

  @Prop({ required: true })
  bairro: string;

  @Prop({ required: true })
  cidade: string;


  @Prop({ required: true })
  estado: string;

  @Prop({ required: true })
  cep: string;

  @Prop()
  complemento: string;
}

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);