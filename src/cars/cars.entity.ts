// car.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Brand } from '../brands/brands.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  image: string;

  @Column()
  motor: string;

  @Column()
  power: number;

  @Column()
  velocity: number;

  @Column()
  acceleration: number;

  @Column()
  price: number;

  @ManyToOne(() => Brand, brand => brand.cars)
  brand: Brand;
}
