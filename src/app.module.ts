import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'

import { IssueModule } from './issue/issue.module';
import { PartModule } from './part/part.module';
import { PartProfileModule } from './part_profile/part_profile.module';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { EquipmentModule } from './equipment/equipment.module';
import { CategoryModule } from './category/category.module';
import { GroupModule } from './group/group.module';
import { SubgroupModule } from './subgroup/subgroup.module';
import { User } from './user/entities/user.entity';
import { Department } from './department/entities/department.entity';
import { Issue } from './issue/entities/issue.entity';
import { Group } from './group/entities/group.entity';
import { Equipment } from './equipment/entities/equipment.entity';
import { Part } from './part/entities/part.entity';
import { PartProfile } from './part_profile/entities/part_profile.entity';
import { TypeModule } from './type/type.module';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '35.103232',
      database: 'cmms',
      entities: [ User, Issue, Department, Group, Equipment, Part, PartProfile, Category ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    IssueModule,
    PartModule,
    PartProfileModule,
    UserModule,
    DepartmentModule,
    EquipmentModule,
    GroupModule,
    SubgroupModule,
    TypeModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
