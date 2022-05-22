import { SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { EventDTO } from "./event.dto";

export const EVENT_SCHEMA_NAME = 'event';

export const EventSchema = SchemaFactory.createForClass(EventDTO);

export type IEvent = EventDTO & Document;