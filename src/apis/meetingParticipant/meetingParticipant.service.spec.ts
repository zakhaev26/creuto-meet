import { Test, TestingModule } from '@nestjs/testing';
import { MeetingParticipantService } from './meetingParticipant.service';

describe('MeetingParticipantService', () => {
  let service: MeetingParticipantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingParticipantService],
    }).compile();

    service = module.get<MeetingParticipantService>(MeetingParticipantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
