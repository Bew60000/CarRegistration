import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  // Body,
  // Patch,
  // Param,
  Delete,
} from '@nestjs/common';
import { ReportVilolationService } from './report_vilolation.service';
import { CreateReportViolationDto } from '../../types/report_Violation';
import { ReportViolation } from '../../types/report_Violation';

@Controller('report-violation')
export class ReportVilolationController {
  constructor(
    private readonly reportVilolationService: ReportVilolationService,
  ) {}

  @Post()
  async create(@Body() dto: CreateReportViolationDto): Promise<void> {
    return this.reportVilolationService.create(dto);
  }

  @Get()
  findAllPromise(): Promise<ReportViolation[]> {
    return this.reportVilolationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReportViolation> {
    return this.reportVilolationService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateReportVilolationDto: UpdateReportVilolationDto,
  // ) {
  //   return this.reportVilolationService.update(+id, updateReportVilolationDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.reportVilolationService.remove(+id);
    return { message: `ลบข้อมูล report_id = ${id} สำเร็จ` };
  }
}
