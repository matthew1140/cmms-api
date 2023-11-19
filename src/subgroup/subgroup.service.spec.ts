import { Test, TestingModule } from '@nestjs/testing';
import { SubgroupService } from './subgroup.service';

describe('SubgroupService', () => {
  let service: SubgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubgroupService],
    }).compile();

    service = module.get<SubgroupService>(SubgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
