import { Issue } from "src/issue/entities/issue.entity";

export class CreatePartDto {
    id: number;
    code: string;
    name: string;
    qty: number;
    unit: string;
    issueId: number;
}
