import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Md5 } from 'md5-typescript';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepos: Repository<User>) {}

  login(name: string, password: string) {
    return this.userRepos.findOne({
      select: {
        id: true,
        name: true,
        firstname: true,
        lastname: true,
        position: true,
        role: true
      },
      where: {
        name: name,
        password: password,
        status: 1
      } 
    })
  }

  create(createUserDto: CreateUserDto) {
    createUserDto.password = Md5.init(createUserDto.password);
    return this.userRepos.save(createUserDto);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.password = Md5.init(updateUserDto.password);
    return this.userRepos.update(id, updateUserDto)
  }

  findAll() {
    return this.userRepos.find();
  }

  findTech() {
    return this.userRepos.find({
      where: { role: 2}
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
