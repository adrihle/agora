import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsString } from "class-validator";
import { SchemaTypes } from "mongoose";
import { PostDTO, POST_SCHEMA_NAME } from "../post";
import { UserDTO, USER_SCHEMA_NAME } from "../user";

@Schema({ timestamps: true })
export class CommentDTO {
  @IsMongoId()
  @ApiProperty({ type: String })
  _id: string;

  @IsMongoId()
  @ApiProperty({ type: UserDTO })
  @Prop({ type: SchemaTypes.ObjectId, required: true, ref: USER_SCHEMA_NAME})
  createdBy: UserDTO;

  @IsMongoId()
  @ApiProperty({ type: PostDTO })
  @Prop({ type: SchemaTypes.ObjectId, required: true, ref: POST_SCHEMA_NAME })
  postId: PostDTO;

  @IsString()
  @ApiProperty({ type: String })
  @Prop({ type: String, required: true })
  content: string;
}