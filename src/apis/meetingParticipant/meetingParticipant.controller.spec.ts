import { Test, TestingModule } from '@nestjs/testing';
import { MeetingParticipantController } from './meetingParticipant.controller';

describe('MeetingParticipantController', () => {
  let controller: MeetingParticipantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetingParticipantController],
    }).compile();

    controller = module.get<MeetingParticipantController>(
      MeetingParticipantController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
