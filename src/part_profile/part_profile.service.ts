import { Injectable } from '@nestjs/common';
import { CreatePartProfileDto } from './dto/create-part_profile.dto';
import { UpdatePartProfileDto } from './dto/update-part_profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { PartProfile } from './entities/part_profile.entity';

@Injectable()
export class PartProfileService {

  constructor(@InjectRepository(PartProfile) private partProfileRepos: Repository<PartProfile>) { }

  create(createPartProfileDto: CreatePartProfileDto) {
    return this.partProfileRepos.save(createPartProfileDto);
  }

  update(id: number, updatePartProfileDto: UpdatePartProfileDto) {
    return this.partProfileRepos.update(id, updatePartProfileDto);
  }

  findAll() {
    return this.partProfileRepos.find(); 
  }

  findByEquipment(id: number) {
    return this.partProfileRepos.find({
      where: { equipment: { id: id}}
    }); 
  }

  findOne(id: number) {
    return `This action returns a #${id} partProfile`;
  }

//  update(id: number, updatePartProfileDto: UpdatePartProfileDto) {
//    return `This action updates a #${id} partProfile`;
//  }

  remove(id: number) {
    return `This action removes a #${id} partProfile`;
  }
}
