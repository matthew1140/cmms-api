import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { Equipment } from 'src/equipment/entities/equipment.entity';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
    code: string;
    name: string;
    equipments: Equipment[];
}
