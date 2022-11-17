import {
  Controller,
  Get,
  Delete,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { SimulationDataService } from '../simulation_data/simulation_data.service';
import { DbErrors } from '../errors/db.errors';

@Controller('admin')
export class AdminController {
  constructor(private readonly simulationDataService: SimulationDataService) {}

  @Get('get-all-data')
  @HttpCode(200)
  async getAllData(): Promise<any> {
    return this.simulationDataService.getAllData();
  }

  @Delete('delete-all-data')
  @HttpCode(204)
  async deleteAllData(): Promise<void> {
    try {
      await this.simulationDataService.deleteAllData();
    } catch (err) {
      throw new BadRequestException(DbErrors.DeleteAllDataError);
    }
  }
}
