import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDTO } from "./user.dto";
import { iUser, USER_SCHEMA_NAME } from "./user.schema";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(USER_SCHEMA_NAME) private readonly model: Model<iUser>
    ){};

    async getUsers(){
        return this.model.find().lean();
    };

    async getUserByEmail(email: string){
        return this.model.findOne({email}).lean();
    }

    async getUserById(id: string){
        return this.model.findById(id).lean();
    };

    async createUser(user: UserDTO){
        const newUser = new this.model(user);
        await newUser.save();
        return newUser;
    };

    async updateUser(id: string, user: UserDTO){
        return this.model.findByIdAndUpdate(id, user);
    };

    async deleteUser(id: string){
        return this.model.findByIdAndDelete(id);
    }
}