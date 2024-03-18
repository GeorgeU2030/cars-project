import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Car } from '../cars/cars.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  foundation: Date;

  @Column()
  location: string;

  @Column()
  logo: string;

  @OneToMany(() => Car, car => car.brand)
  cars: Car[];
}
