import { PartialType } from '@nestjs/mapped-types';
import { CreatePartProfileDto } from './create-part_profile.dto';
import { Equipment } from 'src/equipment/entities/equipment.entity';
import { Part } from 'src/part/entities/part.entity';

export class UpdatePartProfileDto extends PartialType(CreatePartProfileDto) {
  code: string;
  name: string;
  unit: string;
  equipment: Equipment;
}
