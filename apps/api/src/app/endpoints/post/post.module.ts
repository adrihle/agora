import { RepositoryModule } from "@agora/repository";
import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";

@Module({
  imports: [RepositoryModule],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {};
