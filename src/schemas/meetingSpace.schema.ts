import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Users } from './users.schema';
import { Organizations } from './organizations.schema';

export type MeetingSpaceDocument = HydratedDocument<MeetingSpace>;

@Schema({
  timestamps: true,
})
export class MeetingSpace {
  @Prop({ type: Types.ObjectId, ref: Organizations.name, required: true })
  organization: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Users.name, required: true })
  createdBy: Types.ObjectId;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String, trim: true, required: true })
  title: string;

  @Prop({ type: String, trim: true })
  description?: string;

  @Prop({ type: Date, required: true })
  startTime: Date;

  @Prop({ type: Date, required: true })
  endTime: Date;

  @Prop({ type: String, enum: ['scheduled', 'ongoing', 'completed', 'cancelled'], required: true })
  status: string;

  @Prop({ type: Number, default: 12 })
  maxParticipants: number;

  @Prop({ type: String, unique: true, required: true })
  meetingSlug: string;

  @Prop({ type: String, unique: true, required: true })
  channelName: string;

  @Prop({ type: Boolean, default: false })
  waitingRoomEnabled: boolean;

  @Prop({ type: String, select: false })
  passCode?: string;

  @Prop({ type: Object, default: {} })
  meetingOptions?: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: Users.name, default: null })
  updatedBy?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Users.name, default: null })
  deletedBy?: Types.ObjectId;

  @Prop({ type: Boolean, default: false })
  deleted?: boolean;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;
}

export const MeetingSpaceSchema = SchemaFactory.createForClass(MeetingSpace);
