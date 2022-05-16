import { ApiProperty, OmitType } from "@nestjs/swagger";
import { Exclude, Transform } from "class-transformer";
import { IsDefined, IsString } from "class-validator";
import { UserDTO } from "../../../repository/user";
import { encryptPassword } from "../../../utils/encryptPassword.util";

export class SignupDTO extends OmitType(UserDTO, ['password', '_id']) {
    @IsString()
    @IsDefined()
    @ApiProperty({ type: String, example: '12345678' })
    @Transform(({value}) => encryptPassword(value))
    password: string;
}
