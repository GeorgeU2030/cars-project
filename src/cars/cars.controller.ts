import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './cars.entity';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){        
    }

    @Post()
    async create(@Body() car: Car){
        return this.carsService.create(car)
    }

    @Get()
    async findAll(){
        return this.carsService.findAll()
    }

    @Get(':id')
    async findOne(id: number){
        return this.carsService.findOne(id)
    }

    @Put(':id')
    async update(@Body() car: Car, id: number){
        return this.carsService.update(id, car)
    }

    @Delete(':id')
    async remove(id: number){
        return this.carsService.remove(id)
    }

}
