import { IsDate, IsOptional, IsString } from "class-validator";

export class UpdateBrandDto {

    @IsString()
    @IsOptional()
    readonly name: string;

    @IsDate()
    @IsOptional()
    readonly foundation: Date;

    @IsString()
    @IsOptional()
    readonly location: string;

    @IsString()
    @IsOptional()
    readonly logo: string;
}