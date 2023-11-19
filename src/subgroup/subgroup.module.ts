import { Module } from '@nestjs/common';
import { SubgroupService } from './subgroup.service';
import { SubgroupController } from './subgroup.controller';

@Module({
  controllers: [SubgroupController],
  providers: [SubgroupService]
})
export class SubgroupModule {}
