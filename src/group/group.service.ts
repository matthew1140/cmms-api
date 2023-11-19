import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {

  constructor(@InjectRepository(Group) private groupRepos: Repository<Group>) { }

  create(createGroupDto: CreateGroupDto) {
    return this.groupRepos.save(createGroupDto);
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupRepos.update(id, updateGroupDto);
  }

  findAll() {
    return this.groupRepos.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }


  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
