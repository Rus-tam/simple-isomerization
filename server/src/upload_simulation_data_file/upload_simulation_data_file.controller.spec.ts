import { Test, TestingModule } from '@nestjs/testing';
import { UploadSimulationDataFileController } from './upload_simulation_data_file.controller';

describe('UploadSimulationDataFileController', () => {
  let controller: UploadSimulationDataFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadSimulationDataFileController],
    }).compile();

    controller = module.get<UploadSimulationDataFileController>(UploadSimulationDataFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
