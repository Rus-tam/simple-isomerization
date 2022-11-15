import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadSimulationDataFileService } from './upload_simulation_data_file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileElementResponse } from './dto/file_element.response';

@Controller()
export class UploadSimulationDataFileController {
  constructor(
    private readonly uploadSimulationDataFile: UploadSimulationDataFileService,
  ) {}

  @Post('upload-simulation-file')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    return this.uploadSimulationDataFile.saveFile([file]);
  }
}
