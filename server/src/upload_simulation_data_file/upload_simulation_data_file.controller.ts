import {
  Controller,
  ForbiddenException,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadSimulationDataFileService } from './upload_simulation_data_file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { IFileElement } from '../interfaces/IFileElement';
import { UploadSimulationDataErrors } from '../errors/uploadSimulationData.errors';

@Controller()
export class UploadSimulationDataFileController {
  constructor(
    private readonly uploadSimulationDataFile: UploadSimulationDataFileService,
  ) {}

  @Post('upload-simulation-file')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<IFileElement> {
    if (file.originalname.split('.').pop() === 'csv') {
      return this.uploadSimulationDataFile.saveFile(file);
    } else {
      throw new ForbiddenException(
        UploadSimulationDataErrors.FileExtensionError,
      );
    }
  }
}
