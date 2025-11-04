import { Test, TestingModule } from '@nestjs/testing';
import { ReportVilolationService } from './report_vilolation.service';
import { ReportVilolationController } from './report_vilolation.controller';

describe('ReportVilolationController', () => {
  let controller: ReportVilolationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportVilolationController],
      providers: [ReportVilolationService],
    }).compile();
    controller = module.get<ReportVilolationController>(ReportVilolationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
