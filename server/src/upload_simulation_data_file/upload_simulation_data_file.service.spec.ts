import { Test, TestingModule } from '@nestjs/testing';
import { UploadSimulationDataFileService } from './upload_simulation_data_file.service';

describe('UploadSimulationDataFileService', () => {
  let service: UploadSimulationDataFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadSimulationDataFileService],
    }).compile();

    service = module.get<UploadSimulationDataFileService>(UploadSimulationDataFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
