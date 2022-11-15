import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { UploadDataService } from './upload_data/upload_data.service';
import { UploadDataModule } from './upload_data/upload_data.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// @ts-ignore
// @ts-ignore
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
    UploadDataModule,
  ],
  controllers: [AppController],
  providers: [AppService, UploadDataService],
})
export class AppModule {}
