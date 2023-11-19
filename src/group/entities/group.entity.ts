import { Equipment } from 'src/equipment/entities/equipment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @OneToMany(() => Equipment, (equipment) => equipment.id)
    equipments: Equipment[];
}
