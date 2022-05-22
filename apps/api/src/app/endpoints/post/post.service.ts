import { CreatePostDTO, PostDTO, PostRepository } from "@agora/repository";
import { Inject, Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";

@Injectable()
export class PostService {
  @Inject()
  private readonly repository: PostRepository;

  async get(){
    const posts = await this.repository.fetch(false)
    return posts.map(post => plainToClass(PostDTO, post));

  };

  async create(post: CreatePostDTO){
    return this.repository.create(post);
  }
}