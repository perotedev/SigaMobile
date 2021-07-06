import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
// import { Exclude } from 'class-transformer';

@Schema({timestamps: true, versionKey: false,  toJSON: { virtuals: true }, id: false})
export class User extends Document{
  @Prop({ required: true })
  username: string;

  @Exclude()
  @Prop({ required: true })
  password_hash: string;

  @Prop({type: SchemaTypes.ObjectId , ref: 'Student', required: true })
  student_id: Types.ObjectId;

}

export const UserSchema = SchemaFactory.createForClass(User);