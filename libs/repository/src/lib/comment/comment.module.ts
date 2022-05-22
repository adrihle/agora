import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentSchema, COMMENT_SCHEMA_NAME } from "./comment.schema";
import { CommentRepository } from "./comment.service";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: COMMENT_SCHEMA_NAME,
      schema: CommentSchema
    }])
  ],
  providers: [CommentRepository],
  exports: [CommentRepository]
})
export class CommentModule {};