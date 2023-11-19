import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipmentDto } from './create-equipment.dto';
import { Group } from 'src/group/entities/group.entity';

export class UpdateEquipmentDto extends PartialType(CreateEquipmentDto) {
    code: string;
    name: string;
    group: Group
}
