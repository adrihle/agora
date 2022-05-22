import { IUser, UserDTO, UserRepository } from "@agora/repository";
import { Get, Inject, Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";

@Injectable()
export class TestService {
  @Inject()
  private readonly repository: UserRepository;

  private users: UserDTO[] = [];

  @Get()
  async get(){
    return this.repository.fetch();
  }
}