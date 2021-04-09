import { IsEmail, IsNumberString, IsString, Length } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail(undefined, { message: "Email no formato incorreto." }) 
    email: string;

    @IsNumberString()
    @Length(11, 11)
    phone: string;
} 