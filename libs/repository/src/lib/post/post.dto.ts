import { applyDecorators } from "@nestjs/common";
import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ClassConstructor, Transform, Type } from "class-transformer";
import { IsDefined, IsMongoId, isNotEmptyObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { SchemaTypes } from 'mongoose';
import { UserDTO, USER_SCHEMA_NAME } from "../user";

const AutoTypePopulated = <T>(DTO: ClassConstructor<T>) => {
  return applyDecorators(
    ...[Type(({object, property}) => isNotEmptyObject(object[property]) ? DTO : String)]
  )
}

@Schema({timestamps: true})
export class PostDTO {
  @IsMongoId()
  @IsOptional()
  @Transform(({value}) => String(value))
  @ApiProperty({ type: String })
  _id: string;

  @IsOptional()
  @ApiProperty({ type: UserDTO })
  @ValidateNested()
  @AutoTypePopulated(UserDTO)
  @Prop({ type: SchemaTypes.ObjectId, required: true, ref: USER_SCHEMA_NAME })
  createdBy: UserDTO;

  @IsString()
  @IsDefined()
  @ApiProperty({ type: String, example: 'Reunion secreta' })
  @Prop({ type: String, required: true })
  title: string;

  @IsString()
  @IsDefined()
  @ApiProperty({ type: String, example: 'contenido del post' })
  @Prop({ type: String, required: false })
  content: string;
}

export class CreatePostDTO {
  @IsMongoId()
  @IsDefined()
  @ApiProperty({ type: String })
  createdBy: string;

  @IsString()
  @IsDefined()
  @ApiProperty({ type: String, example: 'Reunion secreta' })
  title: string;

  @IsString()
  @IsDefined()
  @ApiProperty({ type: String, example: 'contenido del post' })
  content: string;
}