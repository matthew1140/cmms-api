import { Equipment } from "src/equipment/entities/equipment.entity";

export class CreateGroupDto {
    id: number;
    code: string;
    name: string;
    equipments: Equipment[];
}
