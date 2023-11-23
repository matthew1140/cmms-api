import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Between, QueryBuilder, Repository } from 'typeorm';
import { Issue } from './entities/issue.entity';

interface RSCode {
  id: number;
}

@Injectable()
export class IssueService {

  private rs: CreateIssueDto;

  constructor(@InjectRepository(Issue) private issueRepos: Repository<Issue>) { }

  async create(createIssueDto: CreateIssueDto) {
    var year = new Date(String(createIssueDto.created)).getFullYear();
    var rs: RSCode[];

    await (this.generateCode(year)).then(s => {
      rs = JSON.parse(JSON.stringify(s));

      if(rs.length>0) {
        var running = '00000' + (Number(s[0].id) + 1);
        var code = `${year + 543}-${running.substring(running.length - 5)}`
        createIssueDto.code = code;

      } else {
        var code = `${year+543}-00001`;
        createIssueDto.code = code;
      }
    });

    return this.issueRepos.save(createIssueDto);
  }

  update(id: number, updateIssueDto: UpdateIssueDto) {
    return this.issueRepos.update(id, updateIssueDto);
  }

  generateCode(year: number) {
    return this.issueRepos.query(`
      select count(*) as id
      from issue
      where year(created)=${year}
    `);
  }

  findAll() {
    return this.issueRepos.find();
  }
  
  findNewToday(type: number) {
    return this.issueRepos.createQueryBuilder('issue')
    .leftJoinAndSelect('issue.equipment', 'equipment')
    .leftJoinAndSelect('equipment.group', 'group')
    .where('type=' + type + ' and date(created) = curdate() and status=1')
    .orderBy('issue.created', 'ASC')
    .getMany();
  }

  findProceeding() {
    return this.issueRepos.find({
      where: {
        status: 1
      }
    });
  }

  findProceedingByDate(type: number, frmDate: string, toDate: string) {
    let frm = new Date(frmDate);
    let to = new Date(toDate);

    to.setDate(to.getDate()+1)

    return this.issueRepos.find({
      where: {
        type: type,
        created: Between(frm, to),
        status: 1
      }
    });
  }

  findWaitForClose() {
    return this.issueRepos.find({
      where: {
        status: 2
      }
    });
  }

  findCompleted() {
    return this.issueRepos.find({
      where: {
        status: 3
      }
    });
  }

  findCompletedByDate(type: number, frmDate: string, toDate: string) {
    let frm = new Date(frmDate);
    let to = new Date(toDate);

    to.setDate(to.getDate()+1)

    return this.issueRepos.find({
      where: {
        created: Between(frm, to),
        status: 3
      }
    });
  }

  findCancelled(type: number) {
    return this.issueRepos.find({
      where: {
        type: type,
        status: 0
      }
    });
  }

  findCancelledByDate(type: number, frmDate: string, toDate: string) {
    let frm = new Date(frmDate);
    let to = new Date(toDate);

    to.setDate(to.getDate()+1)

    return this.issueRepos.find({
      where: {
        type: type,
        created: Between(frm, to),
        status: 0
      }
    });
  }

  findOne(id: number) {
    return this.issueRepos.findOne({
      where: { id: id}
    })
  }

  remove(id: number) {
    return `This action removes a #${id} issue`;
  }

  report1(frmdate: string, todate: string) {
    var query = `
      select A.type, count(*) as total
      from issue as A
      where date(created) between '${frmdate}' and '${todate}' 
      group by A.type
    `;

    return this.issueRepos.query(query);
  }

  report2(frmdate: string, todate: string) {
    var query = `
      select B.name as deptname , count(*) as total
      from issue as A
      join department as B on A.departmentId=B.id
      where date(A.created) between '${frmdate}' and '${todate}' 
      group by A.departmentId 
    `;

    return this.issueRepos.query(query);
  }

  report3(frmdate: string, todate: string) {
    var query = `
      select C.name as groupname, count(*) as total
      from issue as A
      join cmms.equipment as B on A.equipmentId=B.id
      join cmms.group as C on B.groupId=C.id
      where date(A.created) between '${frmdate}' and '${todate}' 
      group by C.name  
    `;

    return this.issueRepos.query(query);
  }

  report4(frmdate: string, todate: string) {
    var query = `
      select A.status as status, count(*) as total
      from issue as A
      where date(A.created) between '${frmdate}' and '${todate}' 
      group by A.status  
    `;

    return this.issueRepos.query(query);
  }
  
  report5(frmdate: string, todate: string) {
    var query = `
      select A.satisfication as  satisfication, count(*) as total
      from issue as A
      where date(A.created) between '${frmdate}' and '${todate}' 
      group by A.satisfication  
    `;

    return this.issueRepos.query(query);
  }
}

