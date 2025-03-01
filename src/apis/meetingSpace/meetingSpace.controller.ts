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
import { MeetingSpaceService } from './meetingSpace.service';
import { User } from '@nest-extended/core/common/decorators/User.decorator';
import { MeetingSpace } from 'src/schemas/meetingSpace.schema';
import { ModifyBody, setCreatedBy } from '@nest-extended/core/common/decorators/ModifyBody.decorator';

@Controller('meeting-space')
export class MeetingSpaceController {
  constructor(private readonly meetingSpaceService: MeetingSpaceService) { }

  @Get()
  async find(@Query() query: Record<string, any>) {
    return await this.meetingSpaceService._find(query);
  }

  @Get('/:id?')
  async get(@Query() query: Record<string, any>, @Param('id') id: string) {
    return await this.meetingSpaceService._get(id, query);
  }

  @Post()
  async create(
    @ModifyBody(setCreatedBy()) createMeetingSpaceDto: MeetingSpace
  ) {
    return await this.meetingSpaceService._create(createMeetingSpaceDto);
  }

  @Patch('/:id?')
  async patch(
    @Query() query,
    @Body() patchMeetingSpaceDto: Partial<MeetingSpace>,
    @Param('id') id,
  ) {
    return await this.meetingSpaceService._patch(id, patchMeetingSpaceDto, query);
  }

  @Delete('/:id?')
  async delete(@Param('id') id, @Query() query, @User() user) {
    return await this.meetingSpaceService._remove(id, query, user);
  }
}
