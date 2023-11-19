import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PartService } from './part.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';

@Controller('part')
export class PartController {
  constructor(private readonly partService: PartService) {}

  @Post()
  create(@Body() createPartDto: CreatePartDto) {
    return this.partService.create(createPartDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePartDto: UpdatePartDto) {
    return this.partService.update(+id, updatePartDto);
  }

  @Get()
  findAll() {
    return this.partService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partService.findOne(+id);
  }

  @Get('/issue/:issueid')
  findByIssue(@Param('issueid') issueid: string) {
    return this.partService.findByIssue(+issueid);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partService.remove(+id);
  }

  @Delete('/issue/:issueid')
  removeByIssue(@Param('issueid') issueid: string) {
    return this.partService.removeByIssuee(+issueid);
  }
}
