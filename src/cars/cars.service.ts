import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './cars.entity';

@Injectable()
export class CarsService {

    constructor(
        @Inject('CARS_REPOSITORY')
        private carsRepository: Repository<Car>,
    ){}

    async findAll(): Promise<Car[]> {
        return this.carsRepository.find();
    }

    async create(car: Car): Promise<Car> {
        return this.carsRepository.save(car);
    }

    async findOne(id: number): Promise<Car> {
        return this.carsRepository.findOne({ where: { id } });
    }

    async update(id: number, car: Car): Promise<Car> {
        await this.carsRepository.update(id, car);
        return this.carsRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.carsRepository.delete(id);
    }
}
