import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsDefined, IsEmail, IsMongoId, IsOptional, IsString, IsUrl } from "class-validator";

@Schema()
export class UserDTO {
    @IsMongoId()
    @IsOptional()
    @ApiProperty({ type: String, example: '627eaec33f297ef15ce36f5f' })
    id?: string;

    @IsString()
    @IsDefined()
    @ApiProperty({ type: String, example: 'Lucia' })
    @Prop({ type: String, required: true })
    name: string;

    @IsEmail()
    @IsDefined()
    @ApiProperty({ type: String, example: 'lucia@gmail.com' })
    @Prop({ type: String, required: true, unique: true })
    email: string;

    @IsString()
    @IsOptional()
    @Exclude({})
    @Prop({ type: String, required: true })
    password: string;

    @IsUrl()
    @IsOptional()
    @ApiProperty({ type: String, example: 'https://google.com' })
    @Prop({ type: String, required: false })
    image?: string;
}