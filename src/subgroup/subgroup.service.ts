import { Injectable } from '@nestjs/common';
import { CreateSubgroupDto } from './dto/create-subgroup.dto';
import { UpdateSubgroupDto } from './dto/update-subgroup.dto';

@Injectable()
export class SubgroupService {
  create(createSubgroupDto: CreateSubgroupDto) {
    return 'This action adds a new subgroup';
  }

  findAll() {
    return `This action returns all subgroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subgroup`;
  }

  update(id: number, updateSubgroupDto: UpdateSubgroupDto) {
    return `This action updates a #${id} subgroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} subgroup`;
  }
}
