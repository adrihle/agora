import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EventSchema, EVENT_SCHEMA_NAME } from "./event.schema";
import { EventRepository } from "./event.service";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: EVENT_SCHEMA_NAME,
      schema: EventSchema
    }])
  ],
  providers: [EventRepository],
  exports: [EventRepository]
})
export class EventModule {};
