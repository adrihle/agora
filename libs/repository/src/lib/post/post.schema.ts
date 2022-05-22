import { SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { PostDTO } from "./post.dto";

export const POST_SCHEMA_NAME = 'post';

export const PostSchema = SchemaFactory.createForClass(PostDTO);

export type IPost = PostDTO & Document;
