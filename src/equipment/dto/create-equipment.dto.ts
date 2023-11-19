import { Group } from "src/group/entities/group.entity";

export class CreateEquipmentDto {
    id: number;
    code: string;
    name: string;
    group: Group
}
