import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './cars.entity';
import { createCarDto } from './dto/create-car.dto';
import { NotFoundException } from '@nestjs/common';
import { Brand } from 'src/brands/brands.entity';
import { updateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    constructor(
        @Inject('CARS_REPOSITORY')
        private carsRepository: Repository<Car>,
        @Inject('BRANDS_REPOSITORY')
        private brandsRepository: Repository<Brand>,
    ){}

    async findAll(): Promise<Car[]> {
        return this.carsRepository.find();
    }

    async create(cardto: createCarDto): Promise<Car> {
        const car = new Car();
        car.model = cardto.model;
        car.year = cardto.year;
        car.image = cardto.image;
        car.motor = cardto.motor;
        car.power = cardto.power;
        car.velocity = cardto.velocity;
        car.acceleration = cardto.acceleration;
        car.price = cardto.price;
        
        const brand = await this.brandsRepository.findOne({ where: { name: cardto.brand } });

        if (!brand) {
            throw new NotFoundException(`Brand with name ${cardto.brand} not found`);
        }

        car.brand = brand;

        return this.carsRepository.save(car);
    }

    async findOne(id: number): Promise<Car> {
        return this.carsRepository.findOne({ where: { id } });
    }

    async update(id: number, car: updateCarDto): Promise<Car> {

        const existingCar = await this.carsRepository.findOne({ where: { id } });

        if (!existingCar) {
            throw new NotFoundException(`Car #${id} not found`);
        }

        const brand = await this.brandsRepository.findOne({ where: { name: car.brand } });

        if (!brand) {
            throw new NotFoundException(`Brand with name ${car.brand} not found`);
        }

        const updateCar = {
            ...car,
            brand: brand
        };

        await this.carsRepository.update(id, updateCar);
        return this.carsRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.carsRepository.delete(id);
    }
}
