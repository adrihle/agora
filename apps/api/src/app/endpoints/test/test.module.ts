import { Module } from "@nestjs/common";
import { RepositoryModule } from "../../repository/repository.module";
import { TestController } from "./test.controller";

@Module({
    imports: [RepositoryModule],
    controllers: [TestController]
})
export class TestModule {};