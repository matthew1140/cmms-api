import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Type {
    p
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;
}
