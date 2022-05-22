import { IsPublicEndpoint } from "@agora/modules";
import { Controller, Get, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TestService } from "./test.service";


@ApiTags('test')
@IsPublicEndpoint()
@Controller('test')
export class TestController {

    @Inject()
    private readonly service: TestService;

    @Get()
    async get(){
        return this.service.get();
    }
}