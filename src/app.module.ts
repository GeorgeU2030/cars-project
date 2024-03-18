import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';
import { BrandsController } from './brands/brands.controller';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule, ConfigModule.forRoot()],
  controllers: [AppController, CarsController, BrandsController],
  providers: [AppService],
})
export class AppModule {}
