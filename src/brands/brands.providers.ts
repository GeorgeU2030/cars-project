import { DataSource } from "typeorm";
import { Brand } from "./brands.entity";

export const brandsProviders = [
    {
        provide: 'BRANDS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Brand),
        inject: ['DATA_SOURCE'],
    }
]