import { Module } from '@nestjs/common';
import { PartProfileService } from './part_profile.service';
import { PartProfileController } from './part_profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartProfile } from './entities/part_profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartProfile])],
  controllers: [PartProfileController],
  providers: [PartProfileService]
})
export class PartProfileModule {}
