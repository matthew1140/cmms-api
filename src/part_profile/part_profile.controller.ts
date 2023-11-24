import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PartProfileService } from './part_profile.service';
import { CreatePartProfileDto } from './dto/create-part_profile.dto';
import { UpdatePartProfileDto } from './dto/update-part_profile.dto';

@Controller('part-profile')
export class PartProfileController {
  constructor(private readonly partProfileService: PartProfileService) {}

  @Post()
  create(@Body() createPartProfileDto: CreatePartProfileDto) {
    return this.partProfileService.create(createPartProfileDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePartProfileDto: UpdatePartProfileDto) {
    return this.partProfileService.update(+id, updatePartProfileDto);
  }

  @Get()
  findAll() {
    return this.partProfileService.findAll();
  }

  @Get('/equipment/:id')
  findByEquipment(@Param('id') id: string) {
    return this.partProfileService.findByEquipment(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partProfileService.findOne(+id);
  }

//  @Patch(':id')
//  update(@Param('id') id: string, @Body() updatePartProfileDto: UpdatePartProfileDto) {
//    return this.partProfileService.update(+id, updatePartProfileDto);
//  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partProfileService.remove(+id);
  }
}
