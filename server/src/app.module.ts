import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { SimulationDataService } from './simulation_data/simulation_data.service';
import { SimulationDataModule } from './simulation_data/simulation_data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadSimulationDataFileModule } from './upload_simulation_data_file/upload_simulation_data_file.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get<string>('POSTGRES_HOST'),
          port: config.get<number>('POSTGRES_PORT'),
          username: config.get<string>('POSTGRES_USER'),
          password: config.get<string>('POSTGRES_PASSWORD'),
          database: config.get<string>('POSTGRES_DATABASE'),
          autoLoadEntities: true,
          synchronize: true,
          logging: true,
        };
      },
    }),
    SimulationDataModule,
    UploadSimulationDataFileModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
