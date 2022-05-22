import { IsPublicEndpoint } from "@agora/modules";
import { Controller, Get, Inject } from "@nestjs/common";
import { PostService } from "./post.service";

@Controller('post')
@IsPublicEndpoint()
export class PostController {
    @Inject()
    private readonly service: PostService;

    @Get()
    async getPost(){
        return this.service.get();
    };
}