import { Injectable } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { path } from 'app-root-path';
import { FileElementResponse } from './dto/file_element.response';
import * as encoding from 'encoding';

@Injectable()
export class UploadSimulationDataFileService {
  async saveFile(files: Express.Multer.File[]) {
    const uploadFolder = `${path}/src/upload_simulation_data_file/simulation_file`;
    await ensureDir(uploadFolder);

    console.log(files);

    const res: FileElementResponse[] = [];
    for (let file of files) {
      if (file.originalname.split('.').includes('csv')) {
        // let text = encoding.convert(file.buffer, 'UTF-8', 'WINDOWS-1251');
        await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      }
    }
  }
}
