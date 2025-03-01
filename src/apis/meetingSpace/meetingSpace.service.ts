import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NestService } from '@nest-extended/core/lib/nest.service';
import { MeetingSpace, MeetingSpaceDocument } from 'src/schemas/meetingSpace.schema';

@Injectable()
export class MeetingSpaceService extends NestService<MeetingSpace, MeetingSpaceDocument> {
  constructor(
    @InjectModel(MeetingSpace.name) private readonly meetingSpaceModel: Model<MeetingSpaceDocument>,
  ) {
    super(meetingSpaceModel)
  }
}