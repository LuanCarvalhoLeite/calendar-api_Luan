import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    description: string;

    @IsDate() 
    date: Date;

    @IsNumber()
    userId: number;
}