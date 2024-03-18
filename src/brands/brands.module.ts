import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { brandsProviders } from './brands.providers';
import { BrandsService } from './brands.service';
import { CarsModule } from 'src/cars/cars.module';

@Module({
    imports: [DatabaseModule,forwardRef(() => CarsModule)],
    providers: [
        ...brandsProviders,
        BrandsService,
    ], 
    exports: [BrandsService,...brandsProviders]
})
export class BrandsModule {}
