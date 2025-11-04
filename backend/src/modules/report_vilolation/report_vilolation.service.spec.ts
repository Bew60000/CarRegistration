import { Test, TestingModule } from '@nestjs/testing';
import { ReportVilolationService } from './report_vilolation.service';

describe('ReportVilolationService', () => {
  let service: ReportVilolationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportVilolationService],
    }).compile();

    service = module.get<ReportVilolationService>(ReportVilolationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
