import { Module } from '@nestjs/common';
import { UploadSimulationDataFileService } from './upload_simulation_data_file.service';
import { UploadSimulationDataFileController } from './upload_simulation_data_file.controller';

@Module({
  imports: [],
  providers: [UploadSimulationDataFileService],
  controllers: [UploadSimulationDataFileController],
  exports: [UploadSimulationDataFileService],
})
export class UploadSimulationDataFileModule {}
