/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@nestjs/common";
import { Model, FilterQuery, ProjectionType } from 'mongoose';

@Injectable()
export abstract class BaseRepository<T> {
  constructor(
        private readonly model: Model<T>
  ){}

  async fetch(): Promise<T[]> {
    return this.model.find<T>().lean();
  };

  async fetchById(id: string): Promise<T> {
    return this.model.findById<T>(id).lean();
  };

  async create(body: Partial<T>) {
    const newDocument = new this.model(body);
    await newDocument.save();
    return this.fetchById(newDocument._id);
  };

  async update(id: string, body: Partial<T>){
    await this.model.findByIdAndUpdate<T>(id, body);
    return this.fetchById(id);
  };

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete<T>(id);
  };

  async customFetch(query: FilterQuery<T>, select?: ProjectionType<T>): Promise<T[]> {
    return this.model.find<T>(query, select).lean();
  }
}
