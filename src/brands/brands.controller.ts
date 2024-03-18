import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { createBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {

    constructor(
        private readonly brandsService: BrandsService
    ) {}

    @Post()
    async create(@Body() brand: createBrandDto){
        return this.brandsService.create(brand)
    }
    
    @Get()
    async findAll(){
        return this.brandsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number){
        return this.brandsService.findOne(id)
    }

    @Put(':id')
    async update(@Body() brand: UpdateBrandDto, @Param('id') id: number){
        return this.brandsService.update(id, brand)
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id: number){
        return this.brandsService.remove(id)
    }
}
