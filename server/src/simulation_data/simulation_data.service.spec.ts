import { Test, TestingModule } from '@nestjs/testing';
import { SimulationDataService } from './simulation_data.service';

describe('UploadDataService', () => {
  let service: SimulationDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimulationDataService],
    }).compile();

    service = module.get<SimulationDataService>(SimulationDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
