import { Test, TestingModule } from '@nestjs/testing';
import { PartProfileService } from './part_profile.service';

describe('PartProfileService', () => {
  let service: PartProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartProfileService],
    }).compile();

    service = module.get<PartProfileService>(PartProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
