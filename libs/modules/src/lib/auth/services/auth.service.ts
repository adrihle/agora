import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { scrypt } from "crypto";
import { UserDTO, UserRepository } from "@agora/repository";
import { SigninDTO, SignResponseDTO } from "../dto/signin.dto";
import { SignupDTO } from "../dto/signup.dto";
import { plainToClass } from "class-transformer";
import { JwtService } from "@nestjs/jwt";
import { decode } from "jsonwebtoken";
import { IDecodedToken } from "../dto";
import { Request } from 'express';
import { ExtractJwt } from "passport-jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ){}

    async signin(signin: SigninDTO): Promise<SignResponseDTO>{
        const { email, password } = signin;
        const [user] = await this.userRepository.customFetch({email});
        if (!user) throw new NotFoundException(`User related to ${email} not found`);
        const isAunthenticated = await this.checkPassword(password, user.password);
        if (!isAunthenticated) throw new BadRequestException('Password is wrong');
        return this.generateAuthResponse(user);
    };

    async signup(signup: SignupDTO): Promise<SignResponseDTO>{
        const user = await this.userRepository.create(signup);
        return this.generateAuthResponse(user);
    };

    async refresh(userId: string){
        const user = await this.userRepository.fetchById(userId);
        return this.generateAuthResponse(user);
    }

    async createToken(user: UserDTO){
        const payload =  {userName: user.name, userId: user._id};
        return this.jwtService.sign(payload)
    }

    decodeToken(token: string){
        const decoded = decode(token) as IDecodedToken;
        return decoded;
    }

    getDecodedTokenFromReq(req: Request){
        const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        return this.decodeToken(token);
    }

    private async generateAuthResponse(user: UserDTO): Promise<SignResponseDTO> {
        return {
            user: plainToClass(UserDTO, {...user, _id: String(user._id)}),
            token: await this.createToken(user)
        };
    } 

    private async checkPassword(password: string, storedPassword: string): Promise<boolean> {
        return new Promise(resolve => {
            const [hashedPassword, salt] = storedPassword.split('.');
            scrypt(password, salt, 64, (err, buffer) => {
                if (err) return resolve(false)
                resolve(buffer.toString('hex') === hashedPassword);
            })
        })
    };
}