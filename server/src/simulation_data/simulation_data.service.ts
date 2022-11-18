import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataEntity } from './entites/data.entity';
import { LessThanOrEqual, Repository, MoreThanOrEqual } from 'typeorm';
import { UploadSimulationDataErrors } from '../errors/uploadSimulationData.errors';
import { IInitialValuesInterface } from '../interfaces/initialValues.interface';

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

    const filteredData = data.filter((data) => data.length > 7);

    for (let row of filteredData) {
      let rowArr: string[] = row.split(',');
      if (rowArr.length !== 0 && rowArr[0].length !== 0) {
        try {
          newUpload = this.dataEntityRepository.create({
            vesselVolume: parseFloat(rowArr[0]),
            feedTemperature: parseFloat(rowArr[1]),
            feedMassFlow: parseFloat(rowArr[2]) * 3600,
            conversion: parseFloat(rowArr[3]),
            massFraction_trButene: parseFloat(rowArr[4]),
            massFraction_cisButene: parseFloat(rowArr[5]),
            feedMassDensity: parseFloat(rowArr[6]),
            createdAt: new Date(),
          });
          await this.dataEntityRepository.save(newUpload);
        } catch (e) {
          throw new BadRequestException(
            UploadSimulationDataErrors.FileExtensionError,
          );
        }
      }
    }
  }

  async getAllData(): Promise<DataEntity[]> {
    return await this.dataEntityRepository.find();
  }

  async deleteAllData(): Promise<void> {
    const allData = await this.dataEntityRepository.find();
    await this.dataEntityRepository.softRemove(allData);
  }

  async findClosestValue(initialValues: IInitialValuesInterface) {
    const valueBelow = await this.dataEntityRepository.findOne({
      where: {
        vesselVolume: LessThanOrEqual(initialValues.vesselValue),
        feedTemperature: LessThanOrEqual(initialValues.feedTemperature),
        feedMassFlow: LessThanOrEqual(initialValues.feedMassFlow),
      },
    });

    const valueAbove = await this.dataEntityRepository.findOne({
      where: {
        vesselVolume: MoreThanOrEqual(initialValues.vesselValue),
        feedTemperature: MoreThanOrEqual(initialValues.feedTemperature),
        feedMassFlow: MoreThanOrEqual(initialValues.feedMassFlow),
      },
    });

    return [valueBelow, valueAbove];
  }
}
