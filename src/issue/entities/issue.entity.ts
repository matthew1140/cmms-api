import { Category } from 'src/category/entities/category.entity';
import { Department } from 'src/department/entities/department.entity';
import { Equipment } from 'src/equipment/entities/equipment.entity';
import { Part } from 'src/part/entities/part.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Issue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', {default: 1})
    type: number;

    @Column()
    code: string;
    
    @Column('datetime')
    created: Date;

    @ManyToOne(() => Department, (department) => department.id, { eager: true })
    department: Department;

    @Column('varchar', { length: 255, default: ''} )
    building?: string;

    @Column('varchar', { length: 15, default: ''} )
    floor?: string;

    @Column('varchar', { length: 255, default: ''} )
    location?: string;

    @Column('varchar', { length: 255, default: ''} )
    caller: string;

    @Column('varchar', { length: 25, default: ''} )
    phoneno: string;

    @ManyToOne( () => Category, (category) => category.id, {eager: true})
    category: Category;

    @ManyToOne(() => Equipment, (equipment) => equipment.id, { eager: true })
    equipment: Equipment;

    @Column('text')
    description: string;

    @Column('text', { default: '' })
    cause: string;

    @Column('text', { default: '' })
    solution: string;

//    @OneToMany(() => Part, (part) => part.issue, { cascade: true, eager: true })
//    parts: Part[];

    @ManyToOne(() => User, (user) => user.id, { eager: true, nullable: true })
    tech: User;

    @Column('int', { default: 0 })
    satisfication: number;

    @Column('datetime', { nullable: true })
    lastModifiedDate?: Date;
    
    @Column('datetime', { nullable: true })
    finishedDate: Date;

    @Column('int', { default: 0 })
    status: number;
}
