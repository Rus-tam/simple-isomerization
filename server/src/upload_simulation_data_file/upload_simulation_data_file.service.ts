import { Injectable } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { path } from 'app-root-path';
import { FileElementInterface } from '../interfaces/fileElement.interface';
import { SimulationDataService } from '../simulation_data/simulation_data.service';

@Injectable()
export class UploadSimulationDataFileService {
  constructor(private readonly simulationDataService: SimulationDataService) {}

  async saveFile(file: Express.Multer.File): Promise<FileElementInterface> {
    const uploadFolder = `${path}/src/upload_simulation_data_file/simulation_file`;
    await ensureDir(uploadFolder);

    await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);

    const data = file.buffer.toString().split('\n');

    await this.simulationDataService.uploadDataToDB(data);

    return {
      name: `${file.originalname}`,
      url: `${uploadFolder}/${file.originalname}`,
      buffer: data,
    };
  }
}
