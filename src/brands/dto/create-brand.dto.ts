import { Transform } from 'class-transformer';
import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class createBrandDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsDate()
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    readonly foundation: Date;

    @IsString()
    @IsNotEmpty()
    readonly location: string;

    @IsString()
    @IsNotEmpty()
    readonly logo: string;
}