import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string
  password: string
  role: number
  firstname: string
  lastname: string
  position: string
  status: number
}
