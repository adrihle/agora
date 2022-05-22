import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsString } from "class-validator";
import { SchemaTypes } from 'mongoose';
import { UserDTO, USER_SCHEMA_NAME } from "../user";

@Schema({timestamps: true})
export class PostDTO {
  @IsMongoId()
  @ApiProperty({ type: String })
  _id: string;

  @IsMongoId()
  @ApiProperty({ type: UserDTO })
  @Prop({ type: SchemaTypes.ObjectId, required: true, ref: USER_SCHEMA_NAME })
  createdBy: UserDTO;

  @IsString()
  @ApiProperty({ type: String, example: 'Reunion secreta' })
  @Prop({ type: String, required: true })
  title: string;

  @IsString()
  @ApiProperty({ type: String, example: 'contenido del post' })
  @Prop({ type: String, required: false })
  content: string;
}