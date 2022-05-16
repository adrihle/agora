import { Module } from "@nestjs/common";
import { AuthModule } from "#modules";
import { TestModule } from "./test/test.module";

@Module({
    imports: [
        AuthModule,
        TestModule
    ]
})
export class EndpointsModule {}