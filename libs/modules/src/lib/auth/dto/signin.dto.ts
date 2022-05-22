import { UserDTO } from "@agora/repository";
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsJWT, IsString } from "class-validator";

export class SigninDTO {
    @IsEmail()
    @IsDefined()
    @ApiProperty({ type: String, example: 'lucia@gmail.com' })
    email: string;

    @IsString()
    @IsDefined()
    @ApiProperty({ type: String, example: '12345678' })
    password: string;
};

export class SignResponseDTO {
    user: UserDTO;

    @IsJWT()
    @IsDefined()
    @ApiProperty({ type: String })
    token: string;
}