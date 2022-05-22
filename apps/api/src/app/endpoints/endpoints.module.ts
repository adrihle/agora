import { AuthModule } from "@agora/modules";
import { Module } from "@nestjs/common";
import { PostModule } from "./post/post.module";
import { TestModule } from "./test/test.module";

@Module({
    imports: [
        AuthModule,
        TestModule,
        PostModule
    ]
})
export class EndpointsModule {}