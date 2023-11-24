import { Category } from "src/category/entities/category.entity";
import { Department } from "src/department/entities/department.entity";
import { Equipment } from "src/equipment/entities/equipment.entity";
import { Part } from "src/part/entities/part.entity";
import { Type } from "src/type/entities/type.entity";
import { User } from "src/user/entities/user.entity";

export class CreateIssueDto {
    id: number;
    type: number;
    code: string;
    created: Date;
    department?: Department;
    building?: string;
    floor?: string;
    location?: string;
    caller: string;
    phoneno: string;
    typeOfJob: Type;
    category: Category;
    equipment?: Equipment;
    description: string;
    cause: string;
    solution: string;
 //   parts?: Part[];
    tech?: User;
    satisfication?: number;
    lastModifiedDate?: Date;
    finishedDate?: Date;
    status: number;
}
