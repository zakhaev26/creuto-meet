import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MeetingParticipantService } from './meetingParticipant.service';
import { User } from '@nest-extended/core/common/decorators/User.decorator';
import { MeetingParticipant } from 'src/schemas/meetingParticipant.schema';
import { ModifyBody, setCreatedBy } from '@nest-extended/core/common/decorators/ModifyBody.decorator';

@Controller('meeting-participant')
export class MeetingParticipantController {
  constructor(private readonly meetingParticipantService: MeetingParticipantService) { }

  @Get()
  async find(@Query() query: Record<string, any>) {
    return await this.meetingParticipantService._find(query);
  }

  @Get('/:id?')
  async get(@Query() query: Record<string, any>, @Param('id') id: string) {
    return await this.meetingParticipantService._get(id, query);
  }

  @Post()
  async create(
    @ModifyBody(setCreatedBy()) createMeetingParticipantDto: MeetingParticipant
  ) {
    return await this.meetingParticipantService._create(createMeetingParticipantDto);
  }

  @Patch('/:id?')
  async patch(
    @Query() query,
    @Body() patchMeetingParticipantDto: Partial<MeetingParticipant>,
    @Param('id') id,
  ) {
    return await this.meetingParticipantService._patch(id, patchMeetingParticipantDto, query);
  }

  @Delete('/:id?')
  async delete(@Param('id') id, @Query() query, @User() user) {
    return await this.meetingParticipantService._remove(id, query, user);
  }
}
