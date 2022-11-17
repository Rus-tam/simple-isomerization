import { Module } from '@nestjs/common';
import { SimulationDataService } from './simulation_data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataEntity } from './entites/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataEntity])],
  providers: [SimulationDataService],
  exports: [SimulationDataService],
})
export class SimulationDataModule {}
