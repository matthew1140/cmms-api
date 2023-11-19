import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { Group } from 'src/group/entities/group.entity';
import { Equipment } from './entities/equipment.entity';

@Injectable()
export class EquipmentService {

  constructor(@InjectRepository(Equipment) private equipmentRepos: Repository<Equipment>) { }
  
  create(createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentRepos.save(createEquipmentDto);
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentRepos.update(id, updateEquipmentDto);
  }

  findAll() {
    return this.equipmentRepos.find(); 
  }

  findByGroup(groupid: number) {
    return this.equipmentRepos.find({
      where: { group: { id: groupid}},
      order: { name: 'ASC' } 
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} equipment`;
  }


  remove(id: number) {
    return `This action removes a #${id} equipment`;
  }
}
