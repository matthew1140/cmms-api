import { PartialType } from '@nestjs/mapped-types';
import { CreatePartDto } from './create-part.dto';
import { Issue } from 'src/issue/entities/issue.entity';

export class UpdatePartDto extends PartialType(CreatePartDto) {
    code: string;
    name: string;
    qty: number;
    unit: string;
    issueId: number;
}
