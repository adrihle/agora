import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { scrypt } from "crypto";
import { UserDTO, UserRepository } from "#repository";
import { SigninDTO } from "../dto/signin.dto";
import { SignupDTO } from "../dto/signup.dto";
import { plainToClass } from "class-transformer";

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async signin(signin: SigninDTO){
        const { email, password } = signin;
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) throw new NotFoundException(`User related to ${email} not found`);
        const isAunthenticated = await this.checkPassword(password, user.password);
        if (!isAunthenticated) throw new BadRequestException('Password is wrong');
        return plainToClass(UserDTO, {...user, _id: String(user._id)});
    }

    async signup(signup: SignupDTO){
        const user = await this.userRepository.createUser(signup);
        return plainToClass(UserDTO, {...user, _id: String(user._id)});
    }

    private async checkPassword(password: string, storedPassword: string): Promise<boolean> {
        return new Promise(resolve => {
            const [hashedPassword, salt] = storedPassword.split('.');
            scrypt(password, salt, 64, (err, buffer) => {
                if (err) return resolve(false)
                resolve(buffer.toString('hex') === hashedPassword);
            })
        })
    }
}