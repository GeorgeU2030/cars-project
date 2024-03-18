import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Brand } from './brands.entity';
import { createBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { NotFoundException } from '@nestjs/common';
import { Car } from 'src/cars/cars.entity';

@Injectable()
export class BrandsService {
    
    constructor(
        @Inject('BRANDS_REPOSITORY')
        private brandsRepository: Repository<Brand>,
        @Inject('CARS_REPOSITORY')
        private carsRepository: Repository<Car>
    ) {}

    async findAll(): Promise<Brand[]> {
        return this.brandsRepository.find();
    }

    async create(brandDto: createBrandDto): Promise<Brand> {
        const brand = new Brand();
        brand.name = brandDto.name;
        brand.foundation = brandDto.foundation;
        brand.location = brandDto.location;
        brand.logo = brandDto.logo;
        return this.brandsRepository.save(brand);
    }

    async findOne(id: number): Promise<Brand> {
        return this.brandsRepository.findOne({ where: { id } });
    }

    async update(id: number, brand: UpdateBrandDto): Promise<Brand> {
        const existingbrand = await this.brandsRepository.findOne({ where: { id } });

        if(!existingbrand){
            throw new NotFoundException(`Brand #${id} not found`);
        }
        
        await this.brandsRepository.update(id, brand);
        return this.brandsRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        const brand = await this.brandsRepository.findOne({ where: { id }});
        if(!brand){
            throw new NotFoundException(`Brand #${id} not found`);
        }
        const carsWithThisBrand = await this.carsRepository.find({where: {brand: brand}});
        if(carsWithThisBrand.length > 0){
            throw new NotFoundException(`Brand #${id} has cars associated`);
        }
        await this.brandsRepository.delete(id);
        return;
    }
    
}
