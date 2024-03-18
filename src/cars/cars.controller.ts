import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){        
    }

    @Post()
    async create(@Body() car: createCarDto){
        return this.carsService.create(car)
    }

    @Get()
    async findAll(){
        return this.carsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number){
        return this.carsService.findOne(id)
    }

    @Put(':id')
    async update(@Body() car: updateCarDto, @Param('id') id: number){
        return this.carsService.update(id, car)
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id: number){
        return this.carsService.remove(id)
    }

}
