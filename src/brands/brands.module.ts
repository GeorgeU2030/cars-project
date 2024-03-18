import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { brandsProviders } from './brands.providers';
import { BrandsService } from './brands.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...brandsProviders,
        BrandsService,
    ], 
    exports: [BrandsService]
})
export class BrandsModule {}
