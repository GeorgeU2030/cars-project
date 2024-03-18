import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './brands.entity';

@Controller('brands')
export class BrandsController {

    constructor(
        private readonly brandsService: BrandsService
    ) {}

    @Post()
    async create(@Body() brand: Brand){
        return this.brandsService.create(brand)
    }
    
    @Get()
    async findAll(){
        return this.brandsService.findAll()
    }

    @Get(':id')
    async findOne(id: number){
        return this.brandsService.findOne(id)
    }

    @Put(':id')
    async update(@Body() brand: Brand, id: number){
        return this.brandsService.update(id, brand)
    }

    @Delete(':id')
    async remove(id: number){
        return this.brandsService.remove(id)
    }
}
