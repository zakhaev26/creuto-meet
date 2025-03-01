import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NestService } from '@nest-extended/core/lib/nest.service';
import { MeetingParticipant, MeetingParticipantDocument } from 'src/schemas/meetingParticipant.schema';

@Injectable()
export class MeetingParticipantService extends NestService<MeetingParticipant, MeetingParticipantDocument> {
  constructor(
    @InjectModel(MeetingParticipant.name) private readonly meetingParticipantModel: Model<MeetingParticipantDocument>,
  ) {
    super(meetingParticipantModel)
  }
}