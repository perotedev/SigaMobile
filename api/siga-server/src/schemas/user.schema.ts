import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema({timestamps: true, versionKey: false,  toJSON: { virtuals: true }, id: false})
export class User extends Document{
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({type: SchemaTypes.ObjectId , ref: 'Student', required: true })
  studantId: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);