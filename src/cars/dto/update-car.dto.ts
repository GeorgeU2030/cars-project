import { IsNumber, IsOptional, IsString } from "class-validator";


export class updateCarDto {

    @IsString()
    @IsOptional()
    readonly model: string;

    @IsOptional()
    @IsNumber()
    readonly year: number;

    @IsString()
    @IsOptional()
    readonly image: string;

    @IsString()
    @IsOptional()
    readonly motor: string;

    @IsNumber()
    @IsOptional()
    readonly power: number;

    @IsNumber()
    @IsOptional()
    readonly velocity: number;

    @IsNumber()
    @IsOptional()
    readonly acceleration: number;

    @IsNumber()
    @IsOptional()
    readonly price: number;

    @IsString()
    @IsOptional()
    brand: string;
}