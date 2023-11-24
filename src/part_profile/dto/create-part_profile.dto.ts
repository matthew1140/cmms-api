import { Equipment } from "src/equipment/entities/equipment.entity";
import { Part } from "src/part/entities/part.entity";

export class CreatePartProfileDto {
  id: number;
  code: string;
  name: string;
  unit: string;
  equipment: Equipment;
}
