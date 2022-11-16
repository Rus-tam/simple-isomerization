import { Injectable } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { path } from 'app-root-path';
import { IFileElement } from '../interfaces/IFileElement';

@Injectable()
export class UploadSimulationDataFileService {
  async saveFile(file: Express.Multer.File): Promise<IFileElement> {
    const uploadFolder = `${path}/src/upload_simulation_data_file/simulation_file`;
    await ensureDir(uploadFolder);

    await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);

    return {
      name: `${file.originalname}`,
      url: `${uploadFolder}/${file.originalname}`,
    };
  }
}
