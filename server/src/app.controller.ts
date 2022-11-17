import { Controller, Get, Delete, HttpCode, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SimulationDataService } from './simulation_data/simulation_data.service';
import { IInitialValuesInterface } from './interfaces/initialValues.interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly simulationDataService: SimulationDataService,
  ) {}

  @Post()
  @HttpCode(200)
  async playground(@Body() initialValues: IInitialValuesInterface) {
    return this.simulationDataService.findClosestValue(initialValues);
  }
}
