import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "../base.service";
import { IUser, USER_SCHEMA_NAME } from "./user.schema";

@Injectable()
export class UserRepository extends BaseRepository<IUser, IUser> {
    
    constructor(
        @InjectModel(USER_SCHEMA_NAME)
        private readonly userRepository: Model<IUser>
    ){
        super(userRepository);    
    }
}