import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
//import { Issue } from 'src/issue/entities/issue.entity'

@Entity()
export class User {
   @PrimaryGeneratedColumn()
    id: number;

    //@OneToMany(() => Issue, (issue) => issue.tech)
    //issues: Issue[];

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    role: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    position: string;

    @Column()
    status: number;
}
