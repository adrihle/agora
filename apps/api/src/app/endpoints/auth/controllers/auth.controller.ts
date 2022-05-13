import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserDTO } from "../../../repository/user";
import { AUTH_BASE_URL } from "../constants/endpoint";
import { SigninDTO } from "../dto/signin.dto";
import { SignupDTO } from "../dto/signup.dto";
import { AuthService } from "../services/auth.service";

@ApiTags(AUTH_BASE_URL)
@Controller(AUTH_BASE_URL)
export class AuthController {
    constructor(private readonly service: AuthService){}

    @Post('/signin')
    @HttpCode(HttpStatus.OK)
    async signin(@Body() body: SigninDTO): Promise<UserDTO> {
        return this.service.signin(body);
    };

    @Post('/signup')
    @HttpCode(HttpStatus.OK)
    async signup(@Body() body: SignupDTO): Promise<UserDTO>{
        return this.service.signup(body);
    }
}