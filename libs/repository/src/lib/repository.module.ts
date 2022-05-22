import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentModule } from "./comment";
import { EventModule } from "./event";
import { PostModule } from "./post";
import { UserModule } from "./user";

@Module({
    imports: [
        MongooseModule.forRoot(process.env['NX_DB_CHAIN'] ?? ''),
        UserModule,
        PostModule,
        CommentModule,
        EventModule
    ],
    exports: [
        UserModule,
        PostModule,
        CommentModule,
        EventModule
    ]
})
export class RepositoryModule {};