import { Issue } from "src/issue/entities/issue.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Part {
    @PrimaryColumn()
    id: number

    @Column('varchar', { length: 15, default: '' })
    code: string;

    @Column('varchar', { length: 255, default: '' })
    name: string;
    
    @Column('int', { default: 0 })
    qty: number;

    @Column('varchar', { length: 15, default: '' })
    unit: string;

    @PrimaryColumn()
    issueId: number;

//    @ManyToOne(() => Issue, (issue) => issue.parts)
//    issue: Issue;
}
