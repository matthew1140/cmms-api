import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepos: Repository<Category>) { }

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepos.save(createCategoryDto);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepos.update(id, updateCategoryDto);
  }

  findAll() {
    return this.categoryRepos.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
