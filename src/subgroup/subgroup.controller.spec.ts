import { Test, TestingModule } from '@nestjs/testing';
import { SubgroupController } from './subgroup.controller';
import { SubgroupService } from './subgroup.service';

describe('SubgroupController', () => {
  let controller: SubgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubgroupController],
      providers: [SubgroupService],
    }).compile();

    controller = module.get<SubgroupController>(SubgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
