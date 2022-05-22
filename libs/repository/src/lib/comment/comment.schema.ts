import { SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CommentDTO } from "./comment.dto";

export const COMMENT_SCHEMA_NAME = 'comment';

export const CommentSchema = SchemaFactory.createForClass(CommentDTO);

export type IComment = CommentDTO & Document;