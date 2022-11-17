import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SimulationDataModule } from '../simulation_data/simulation_data.module';

@Module({
  imports: [SimulationDataModule],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
