import { UserDTO } from "@agora/repository";
import { ApiProperty, OmitType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDefined, IsString } from "class-validator";
import { encryptPassword } from "../utils";

export class SignupDTO extends OmitType(UserDTO, ['password', '_id']) {
    @IsString()
    @IsDefined()
    @ApiProperty({ type: String, example: '12345678' })
    @Transform(({value}) => encryptPassword(value))
    password: string;
}
