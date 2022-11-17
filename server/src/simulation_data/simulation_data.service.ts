import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataEntity } from './entites/data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SimulationDataService {
  constructor(
    @InjectRepository(DataEntity)
    private dataEntityRepository: Repository<DataEntity>,
  ) {}

  async uploadDataToDB(data: string[]) {
    data.shift();
    data.pop();
    let newUpload: DataEntity;

    for (let row of data) {
      let rowArr: string[] = row.split(',');
      if (rowArr.length !== 0) {
        try {
          newUpload = this.dataEntityRepository.create({
            vesselVolume: parseFloat(rowArr[0]),
            feedTemperature: parseFloat(rowArr[1]),
            feedMassFlow: parseFloat(rowArr[2]),
            conversion: parseFloat(rowArr[3]),
            massFraction_trButene: parseFloat(rowArr[4]),
            massFraction_cisButene: parseFloat(rowArr[5]),
            feedMassDensity: parseFloat(rowArr[6]),
            createdAt: new Date(),
          });
          await this.dataEntityRepository.save(newUpload);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  async getDataById(id: number) {
    return await this.dataEntityRepository.findBy({ id });
  }

  async getAllData() {
    return await this.dataEntityRepository.find();
  }
}
