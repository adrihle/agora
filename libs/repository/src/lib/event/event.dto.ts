import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsMongoId, IsString } from "class-validator";
import { SchemaTypes } from "mongoose";
import { UserDTO, USER_SCHEMA_NAME } from "../user";

@Schema({ timestamps: true })
export class EventDTO {
  @IsMongoId()
  @ApiProperty({ type: String })
  _id: string;


  @IsMongoId()
  @ApiProperty({ type: UserDTO })
  @Type(() => UserDTO)
  @Prop({ type: SchemaTypes.ObjectId, required: true, ref: USER_SCHEMA_NAME})
  createdBy: UserDTO;

  @IsString()
  @ApiProperty({ type: String })
  @Prop({ type: String, required: true })
  title: string;


  @IsString()
  @ApiProperty({ type: String })
  @Prop({ type: String, required: true })
  content: string;
}

export class CreateEventDTO {
  @IsMongoId()
  @ApiProperty({ type: String })
  createdBy: string;

  @IsString()
  @ApiProperty({ type: String })
  title: string;


  @IsString()
  @ApiProperty({ type: String })
  content: string;

}