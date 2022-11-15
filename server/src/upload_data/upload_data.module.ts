import { Module } from '@nestjs/common';
import { UploadDataService } from './upload_data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataEntity } from './entities/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataEntity])],
  providers: [UploadDataService],
})
export class UploadDataModule {}
