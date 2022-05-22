import { PostRepository } from "@agora/repository";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class PostService {
  @Inject()
  private readonly repository: PostRepository;

  async get(){
    return this.repository.fetch();
  };
}