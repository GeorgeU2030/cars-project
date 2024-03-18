import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createCarDto {
    
    @IsNotEmpty()
    @IsString()
    readonly model: string;

    @IsNotEmpty()
    @IsNumber()
    readonly year: number;

    @IsNotEmpty()
    @IsString()
    readonly image: string;

    @IsNotEmpty()
    @IsString()
    readonly motor: string;

    @IsNotEmpty()
    @IsNumber()
    readonly power: number;

    @IsNotEmpty()
    @IsNumber()
    readonly velocity: number;

    @IsNotEmpty()
    @IsNumber()
    readonly acceleration: number;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    readonly brand: string;
} 