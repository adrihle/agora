import { IsPublicEndpoint, ParamUserId } from "@agora/modules";
import { CreatePostDTO, PostDTO } from "@agora/repository";
import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { POST_BASE_URL } from "../../constants/post.endpoint";
import { PostService } from "./post.service";

@ApiTags(POST_BASE_URL)
@Controller(POST_BASE_URL)
@IsPublicEndpoint()
export class PostController {
    @Inject()
    private readonly service: PostService;

    @Get()
    async getPost(){
        return this.service.get();
    };

    @Post()
    async createPost(@ParamUserId() userId: string, @Body() body: CreatePostDTO){
        return plainToClass(PostDTO, await this.service.create({...body, createdBy: userId}));
    }
}