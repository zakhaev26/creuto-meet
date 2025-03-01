import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Users } from './users.schema';

export type OrganizationsDocument = HydratedDocument<Organizations>;

@Schema({
  timestamps: true,
})
export class Organizations {
  @Prop({ trim: true, required: true })
  name: string;

  @Prop({ trim: true, lowercase: true, unique: true, required: true })
  email: string;

  @Prop({ trim: true })
  website?: string;

  @Prop({ trim: true })
  phone?: string;

  @Prop()
  logo?: string;

  @Prop()
  about?: string;

  @Prop({ default: 'pending' })
  kycStatus?: string;

  @Prop({ type: Object, default: {} })
  agoraCredentials?: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: Users.name, default: null })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Users.name, default: null })
  updatedBy?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Users.name, default: null })
  deletedBy?: Types.ObjectId;

  @Prop({ type: Boolean, default: false })
  deleted?: boolean;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;
}

export const OrganizationsSchema = SchemaFactory.createForClass(Organizations);
