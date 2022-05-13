import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsString } from "class-validator";

export class SigninDTO {
    @IsEmail()
    @IsDefined()
    @ApiProperty({ type: String, example: 'lucia@gmail.com' })
    email: string;

    @IsString()
    @IsDefined()
    @ApiProperty({ type: String, example: '12345678' })
    password: string;
}