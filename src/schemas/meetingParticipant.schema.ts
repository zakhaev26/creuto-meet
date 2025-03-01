import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Users } from './users.schema';
import { Organizations } from './organizations.schema';
import { MeetingSpace } from './meetingSpace.schema';

export type MeetingParticipantDocument = HydratedDocument<MeetingParticipant>;

@Schema({
  timestamps: true,
})
export class MeetingParticipant {
  @Prop({ type: Types.ObjectId, ref: MeetingSpace.name, required: true })
  meetingSpace: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Users.name, required: true })
  user: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Organizations.name, required: true })
  organization: Types.ObjectId;

  @Prop({ type: String, enum: ['host', 'cohost', 'attendee'], required: true })
  role: string;

  @Prop({ type: String, enum: ['active', 'inactive'], required: true })
  status: string;

  @Prop({ type: Number, required: true, unique: true })
  UID: number;

  // @Prop({ type: String, required: true })
  // agoraToken: string;

  // @Prop({ type: Date, required: true })
  // agoraTokenExpiresAt: Date;

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

export const MeetingParticipantSchema = SchemaFactory.createForClass(MeetingParticipant);
