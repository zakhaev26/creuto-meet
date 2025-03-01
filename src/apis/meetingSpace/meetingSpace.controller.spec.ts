import { Test, TestingModule } from '@nestjs/testing';
import { MeetingSpaceController } from './meetingSpace.controller';

describe('MeetingSpaceController', () => {
  let controller: MeetingSpaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetingSpaceController],
    }).compile();

    controller = module.get<MeetingSpaceController>(MeetingSpaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
