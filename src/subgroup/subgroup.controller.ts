import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubgroupService } from './subgroup.service';
import { CreateSubgroupDto } from './dto/create-subgroup.dto';
import { UpdateSubgroupDto } from './dto/update-subgroup.dto';

@Controller('subgroup')
export class SubgroupController {
  constructor(private readonly subgroupService: SubgroupService) {}

  @Post()
  create(@Body() createSubgroupDto: CreateSubgroupDto) {
    return this.subgroupService.create(createSubgroupDto);
  }

  @Get()
  findAll() {
    return this.subgroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subgroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubgroupDto: UpdateSubgroupDto) {
    return this.subgroupService.update(+id, updateSubgroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subgroupService.remove(+id);
  }
}
