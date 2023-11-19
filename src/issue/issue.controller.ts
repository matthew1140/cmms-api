import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';

@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.issueService.create(createIssueDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issueService.update(+id, updateIssueDto);
  }

  @Get()
  findAll() {
    return this.issueService.findAll();
  }
  
  @Get('new-today')
  findNewToday() {
    return this.issueService.findNewToday();
  }

  @Get('proceeding')
  findProceeding() {
    return this.issueService.findProceeding();
  }

  @Get('wait-for-close')
  findWaitForClose() {
    return this.issueService.findWaitForClose();
  }

  @Get('completed')
  findCompleted() {
    return this.issueService.findCompleted();
  }

  @Get('cancelled')
  findCancelled() {
    return this.issueService.findCancelled();
  }

  @Get('report1/:frmdate/:todate')
  report1(@Param('frmdate') frmdate: string, @Param('todate') todate: string) {
    return this.issueService.report1(frmdate, todate);
  }

  @Get('report2/:frmdate/:todate')
  report2(@Param('frmdate') frmdate: string, @Param('todate') todate: string) {
    return this.issueService.report2(frmdate, todate);
  }

  @Get('report3/:frmdate/:todate')
  report3(@Param('frmdate') frmdate: string, @Param('todate') todate: string) {
    return this.issueService.report3(frmdate, todate);
  }

  @Get('report4/:frmdate/:todate')
  report4(@Param('frmdate') frmdate: string, @Param('todate') todate: string) {
    return this.issueService.report4(frmdate, todate);
  }

  @Get('report5/:frmdate/:todate')
  report5(@Param('frmdate') frmdate: string, @Param('todate') todate: string) {
    return this.issueService.report5(frmdate, todate);
  }
//  @Get('/new-issue')
//  findNewIssue() {
//    return this.issueService.findNewIssue();
//  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issueService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issueService.remove(+id);
  }
}
