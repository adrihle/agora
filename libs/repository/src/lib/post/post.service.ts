import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "../base.service";
import { CreatePostDTO, PostDTO } from "./post.dto";
import { IPost, POST_SCHEMA_NAME } from "./post.schema";

@Injectable()
export class PostRepository extends BaseRepository<PostDTO, CreatePostDTO> {
  constructor(
    @InjectModel(POST_SCHEMA_NAME) private readonly postModel: Model<IPost>
  ){
    super(
      postModel,
      ['createdBy']
    )
  }
}