import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { EndpointsModule } from "./endpoints/endpoints.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.NX_DB_CHAIN),
        EndpointsModule
    ]
})
export class AppModule {}