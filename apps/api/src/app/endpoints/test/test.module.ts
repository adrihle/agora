import { RepositoryModule } from "@agora/repository";
import { Module } from "@nestjs/common";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";

@Module({
    imports: [RepositoryModule],
    controllers: [TestController],
    providers: [TestService]
})
export class TestModule {};