import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "../base.service";
import { CreateEventDTO, EventDTO } from "./event.dto";
import { EVENT_SCHEMA_NAME, IEvent } from "./event.schema";

@Injectable()
export class EventRepository extends BaseRepository<EventDTO, CreateEventDTO> {
  constructor(
    @InjectModel(EVENT_SCHEMA_NAME) private readonly eventModel: Model<IEvent>
  ){
    super(
      eventModel,
      ['createdBy']
    )
  }
}