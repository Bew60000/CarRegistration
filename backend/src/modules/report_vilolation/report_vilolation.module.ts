import { Module } from '@nestjs/common';
import { ReportVilolationService } from './report_vilolation.service';
import { ReportVilolationController } from './report_vilolation.controller';

@Module({
  controllers: [ReportVilolationController],
  providers: [ReportVilolationService],
})
export class ReportVilolationModule {}
