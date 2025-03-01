import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingParticipantController } from './meetingParticipant.controller';
import { MeetingParticipantService } from './meetingParticipant.service';
import { MeetingParticipant, MeetingParticipantSchema } from 'src/schemas/meetingParticipant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MeetingParticipant.name, schema: MeetingParticipantSchema }]),
  ],
  controllers: [MeetingParticipantController],
  providers: [
  MeetingParticipantService,
  ],
  exports: [MeetingParticipantService],
})
export class MeetingParticipantModule {}
