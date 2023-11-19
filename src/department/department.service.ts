import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(@InjectRepository(Department) private deptRepos: Repository<Department>) { }

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.deptRepos.save(createDepartmentDto);
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.deptRepos.update(id, updateDepartmentDto);
  }

  findAll() {
    return this.deptRepos.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
