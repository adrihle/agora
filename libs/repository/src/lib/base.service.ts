/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@nestjs/common";
import { Model, FilterQuery, ProjectionType, Query, Document } from 'mongoose';

@Injectable()
export abstract class BaseRepository<T, K> {
  constructor(
        private readonly model: Model<T & Document>,
        private readonly populatePaths: (keyof T)[] = []
  ){}

  private populate(preModel: Query<T[], T, any, T> | Query<T, T, any, T>){
    this.populatePaths.forEach(path => preModel.populate(path as string));
    return preModel
  }

  async fetch(populate = false): Promise<(T & Document)[]> {
    const preModel = this.model.find<T>();
    if (populate) return this.populate(preModel).lean();
    return preModel.lean();
  };

  async fetchById(id: string, populate= false): Promise<T & Document> {
    const preModel = this.model.findById<T>(id);
    if (populate) return this.populate(preModel).lean();
    return this.model.findById<T>(id).lean();
  };

  async create(body: Partial<K>, populate = false) {
    const newDocument = new this.model(body);
    await newDocument.save();
    return this.fetchById(newDocument._id, populate);
  };

  async update(id: string, body: Partial<T>){
    await this.model.findByIdAndUpdate<T>(id, body);
    return this.fetchById(id);
  };

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete<T>(id);
  };

  async customFetch(query: FilterQuery<T>, select?: ProjectionType<T>): Promise<(T & Document)[]> {
    return this.model.find<T>(query, select).lean();
  }
}
