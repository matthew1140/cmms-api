import { Test, TestingModule } from '@nestjs/testing';
import { PartProfileController } from './part_profile.controller';
import { PartProfileService } from './part_profile.service';

describe('PartProfileController', () => {
  let controller: PartProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartProfileController],
      providers: [PartProfileService],
    }).compile();

    controller = module.get<PartProfileController>(PartProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
