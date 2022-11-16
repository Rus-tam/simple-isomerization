import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Data } from './entites/data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SimulationDataService {
  constructor(
    @InjectRepository(Data)
    private dataEntityRepository: Repository<Data>,
  ) {}

  // async uploadDataToDB(data: string[]) {
  //   for (let row of data) {
  //     let rowArr: string[] = row.split(',');
  //     console.log(rowArr);
  //     const newUpload = this.dataEntityRepository.create({
  //       vesselVolume: rowArr[0],
  //       feedTemperature: rowArr[1],
  //       feedMassFlow: rowArr[2],
  //       conversion: rowArr[3],
  //       massFraction_trButene: rowArr[4],
  //       massFraction_cisButene: rowArr[5],
  //       feedMassDensity: rowArr[6],
  //       createdAt: new Date(),
  //     });
  //
  //     await this.dataEntityRepository.save(newUpload);
  //   }
  // }
}
