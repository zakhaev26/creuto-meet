import { Test, TestingModule } from '@nestjs/testing';
import { MeetingSpaceService } from './meetingSpace.service';

describe('MeetingSpaceService', () => {
  let service: MeetingSpaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingSpaceService],
    }).compile();

    service = module.get<MeetingSpaceService>(MeetingSpaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
