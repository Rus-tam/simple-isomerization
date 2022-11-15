import { Module } from '@nestjs/common';
import { SimulationDataService } from './simulation_data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataEntity } from './entities/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataEntity])],
  providers: [SimulationDataService],
})
export class SimulationDataModule {}
