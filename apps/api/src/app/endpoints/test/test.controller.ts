import { Controller, Get } from "@nestjs/common";
import { UserRepository } from "../../repository/user";

@Controller('test')
export class TestController {
    constructor(
        private readonly userRepository: UserRepository
    ){}

    @Get()
    async get(){
        return this.userRepository.getUsers();
    }
}