import { Module, forwardRef } from '@nestjs/common';
import { CarsService } from './cars.service';
import { DatabaseModule } from 'src/database/database.module';
import { carsProviders } from './cars.providers';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  imports: [DatabaseModule,forwardRef(() => BrandsModule)],
  providers: [
    ...carsProviders,
    CarsService,
  ],
  exports: [CarsService, ...carsProviders]
  
})
export class CarsModule {}
