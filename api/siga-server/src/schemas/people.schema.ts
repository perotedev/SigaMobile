import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema({timestamps: true, versionKey: false, toJSON: { virtuals: true }, id: false})
export class People extends Document{
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  nascimento: Date;

  @Prop({ required: true })
  rg: string;

  @Prop({ required: true })
  cpf: string;

  @Prop({ required: true })
  sexo: boolean;

  @Prop({ required: true })
  estCivil: string;

  @Prop({ required: true })
  naturalidade: string;

  @Prop({ required: true })
  raca: string;

  @Prop({ required: true })
  fatorRh: string;

  @Prop({ required: true })
  email: string;

  @Prop({type: SchemaTypes.ObjectId , ref: 'ContaBanco', required: true })
  contaBancoId: Types.ObjectId;

  @Prop({type: SchemaTypes.ObjectId , ref: 'Endereco', required: true })
  enderecoId: Types.ObjectId;
}

export const PeopleSchema = SchemaFactory.createForClass(People);
PeopleSchema.virtual('contaBanco', {
    ref: 'ContaBanco',
    localField: 'contaBancoId',
    foreignField: '_id'
});
PeopleSchema.virtual('endereco', {
    ref: 'Endereco',
    localField: 'enderecoId',
    foreignField: '_id'
});
PeopleSchema.virtual('telefones', {
    ref: 'Telefone',
    localField: '_id',
    foreignField: 'peopleId'
});