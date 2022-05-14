import { Controller, Get, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('test')
@Controller('test')
export class TestController {

    @Get()
    async get(){
        console.log('requested test endpoint')
        return {
            xaxi: 'algo'
        };
    }
}