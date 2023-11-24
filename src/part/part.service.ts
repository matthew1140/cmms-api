import { Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Part } from './entities/part.entity';

@Injectable()
export class PartService {

  constructor(@InjectRepository(Part) private partRepos: Repository<Part>) { }

  create(createPartDto: CreatePartDto) {
    return this.partRepos.save(createPartDto);
  }

  update(id: number, updatePartDto: UpdatePartDto) {
    return `This action updates a #${id} part`;
  }

  findAll() {
    return this.partRepos.find();
  }

  findOne(id: number) {
    return this.partRepos.findOne({ where:  {id: id}})
  }

  findByIssue(issueid: number) {
    return this.partRepos.find();
  }

  remove(id: number) {
    return `This action removes a #${id} part`;
  }

  removeByIssuee(issueid: number) {
    return this.partRepos.delete({ issueId: issueid});
  }
}
