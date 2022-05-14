import { SchemaFactory } from "@nestjs/mongoose";
import { UserDTO } from "./user.dto";
import { Document } from 'mongoose';

export const UserSchema = SchemaFactory.createForClass(UserDTO);

export const USER_SCHEMA_NAME = 'user';

export type IUser = UserDTO & Document;