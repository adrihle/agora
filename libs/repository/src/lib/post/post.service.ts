import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "../base.service";
import { IPost, POST_SCHEMA_NAME } from "./post.schema";

@Injectable()
export class PostRepository extends BaseRepository<IPost> {
  constructor(
    @InjectModel(POST_SCHEMA_NAME) private readonly postModel: Model<IPost>
  ){
    super(postModel)
  }
}