import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "../base.service";
import { CommentDTO, CreateCommentDTO } from "./comment.dto";
import { COMMENT_SCHEMA_NAME, IComment } from "./comment.schema";

@Injectable()
export class CommentRepository extends BaseRepository<CommentDTO, CreateCommentDTO> {
  constructor(
    @InjectModel(COMMENT_SCHEMA_NAME) private readonly commentModel: Model<IComment>
  ){
    super(
      commentModel,
      ['createdBy', 'postId']
    )
  }
}