import { message } from 'antd';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const DEFAULT_MESSAGE = 'Something went wrong';
const BASE_URL = 'http://localhost:3333/api';

interface IAPIResponse<T> {
  data: T;
  status: number;
}

const isAxiosError = (value: any): value is AxiosError => {
  return typeof value?.response === 'object';
};

export abstract class APIService {
  protected readonly http: AxiosInstance;
  protected cache: Record<string, { signal: AbortController; date: Date }> = {};
  protected constructor(
    protected readonly path?: string,
    protected readonly baseURL: string = BASE_URL
  ) {
    if (path) baseURL += path;
    this.http = axios.create({
      baseURL
    });
    this.http.interceptors.response.use(
      res => {
        if (res.config.url) delete this.cache[res.config.url];
        return res;
      },
      err => this.handleError(err)
    );
  }

  protected createParams(record: Record<string, string>): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        const value = record[key];
        if (value !== null && value !== undefined) {
          params.append(key, value);
        }
      }
    }
    return params;
  }

  protected handleResponse<T>(response: AxiosResponse<T>): IAPIResponse<T> {
    return { data: response.data, status: response.status };
  }

  protected handleError(error: any) {
    if (error instanceof Error) {
      if (error.name === 'CanceledError') return new Error('Request canceled');
      if (isAxiosError(error)) {
        if (error.config.url) delete this.cache[error.config.url];
        if (error?.response) {
          const err = error as AxiosError<{ message: string }>;
          const errorMessage = err.response?.data.message;
          return message.error(errorMessage ?? DEFAULT_MESSAGE);
        }
      } else {
        throw new Error(error.message);
      }
    }
    throw new Error(error);
  }
}

class Base extends APIService {
  public constructor() {
    super();
  }

  public fetcher = async <T>(url: string, params?: Record<string, string>): Promise<IAPIResponse<T>> => {
    return this.http.get(url, { params }).then(this.handleResponse);
  };

  public poster = async <T>(url: string, data?: Record<string, any>): Promise<IAPIResponse<T>> => {
    return this.http.post(url, data).then(this.handleResponse);
  };

  public putter = async <T>(url: string, data?: Record<string, any>): Promise<IAPIResponse<T>> => {
    return this.http.put(url, data).then(this.handleResponse);
  };

  public deleter = async <T>(url: string): Promise<IAPIResponse<T>> => {
    return this.http.delete(url).then(this.handleResponse);
  };
}

export const { fetcher, poster, putter, deleter } = new Base();
