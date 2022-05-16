import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IsPublicEndpoint } from "#modules";
import { Request } from 'express';


@ApiTags('test')
// @IsPublicEndpoint()
@Controller('test')
export class TestController {

    @Get()
    async get(){
        console.log('requested test endpoint')
        return {
            get: 'algo'
        };
    }

    @Post()
    async post(@Body() body: any, @Req() request: Request){
        console.log(request.headers)
        return {
            post: 'algo'
        };
    }
}