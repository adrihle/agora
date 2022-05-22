import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema, POST_SCHEMA_NAME } from "./post.schema";
import { PostRepository } from "./post.service";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: POST_SCHEMA_NAME,
      schema: PostSchema
    }])
  ],
  providers: [PostRepository],
  exports: [PostRepository]
})
export class PostModule {}