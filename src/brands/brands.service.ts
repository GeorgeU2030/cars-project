import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Brand } from './brands.entity';

@Injectable()
export class BrandsService {
    
    constructor(
        @Inject('BRANDS_REPOSITORY')
        private brandsRepository: Repository<Brand>,
    ) {}

    async findAll(): Promise<Brand[]> {
        return this.brandsRepository.find();
    }

    async create(brand: Brand): Promise<Brand> {
        return this.brandsRepository.save(brand);
    }

    async findOne(id: number): Promise<Brand> {
        return this.brandsRepository.findOne({ where: { id } });
    }

    async update(id: number, brand: Brand): Promise<Brand> {
        await this.brandsRepository.update(id, brand);
        return this.brandsRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.brandsRepository.delete(id);
    }
    
}
