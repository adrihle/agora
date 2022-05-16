import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ParamUserId } from "#decorators";
import { AUTH_BASE_URL } from "../constants/endpoint";
import { IsPublicEndpoint } from "../decorators";
import { SigninDTO, SignResponseDTO } from "../dto/signin.dto";
import { SignupDTO } from "../dto/signup.dto";
import { AuthService } from "../services/auth.service";

@ApiTags(AUTH_BASE_URL)
@Controller(AUTH_BASE_URL)
export class AuthController {
    constructor(private readonly service: AuthService){}

    @Post('/signin')
    @IsPublicEndpoint()
    @HttpCode(HttpStatus.OK)
    async signin(@Body() body: SigninDTO): Promise<SignResponseDTO> {
        return this.service.signin(body);
    };

    @Post('/signup')
    @IsPublicEndpoint()
    @HttpCode(HttpStatus.OK)
    async signup(@Body() body: SignupDTO): Promise<SignResponseDTO>{
        return this.service.signup(body);
    };

    @Get()
    @HttpCode(HttpStatus.OK)
    async refresh(@ParamUserId() userId: string){
        return this.service.refresh(userId);
    }
}