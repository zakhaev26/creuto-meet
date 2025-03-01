import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingSpaceController } from './meetingSpace.controller';
import { MeetingSpaceService } from './meetingSpace.service';
import { MeetingSpace, MeetingSpaceSchema } from 'src/schemas/meetingSpace.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MeetingSpace.name, schema: MeetingSpaceSchema }]),
  ],
  controllers: [MeetingSpaceController],
  providers: [
  MeetingSpaceService,
  ],
  exports: [MeetingSpaceService],
})
export class MeetingSpaceModule {}
