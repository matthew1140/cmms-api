import { Equipment } from "src/equipment/entities/equipment.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartProfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    unit: string;

    @ManyToOne(() => Equipment, (equipment) => equipment.id, {eager: true})
    equipment: Equipment;
}
