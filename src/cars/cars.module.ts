import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { DatabaseModule } from 'src/database/database.module';
import { carsProviders } from './cars.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...carsProviders,
    CarsService,
  ],
  exports: [CarsService]
  
})
export class CarsModule {}
