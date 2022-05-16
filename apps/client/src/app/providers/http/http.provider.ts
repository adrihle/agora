import { message } from "antd";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = 'http://localhost:3333/api';
export abstract class HttpService {
    protected readonly http: AxiosInstance;

    constructor(
        private readonly path?: string,
        private readonly silent: boolean = false
    ){
        this.http = axios.create({
            baseURL: this.path ? `${BASE_URL}${this.path}` : BASE_URL
        });

        this.http.interceptors.request.use(
            req => {
                const token = localStorage.getItem('token');
                if (req.headers){
                  req.headers['Authorization'] = `Bearer ${token}`;
                }
                return req;
            }
        );

        this.http.interceptors.response.use(
            res => {
                const isAuthUrl = res.config.baseURL?.includes('auth');
                if (isAuthUrl){
                  const token = res.data.token;
                  localStorage.setItem('token', token);
                }
                return { status: res.status, data: res.data };
            },
            err => {
              if (err instanceof AxiosError && !this.silent){
                message.error(err.response?.data?.message)
              }
              return err;
            }
        )
    };

    protected handleResponse<T>(response: AxiosResponse<T>): IHttpResponse<T> {
      return { data: response.data, status: response.status };
    }
}

export interface IHttpResponse<T> {
  status: number;
  data: T
}

class Base extends HttpService {
  public constructor() {
    super('', true);
  }

  public fetcher = async <T>(url: string, params?: Record<string, any>): Promise<IHttpResponse<T>> => {
    return this.http.get(url, { params }).then(this.handleResponse);
  };

  public poster = async <T>(url: string, data?: Record<string, any>): Promise<IHttpResponse<T>> => {
    return this.http.post(url, data).then(this.handleResponse);
  };

  public putter = async <T>(url: string, data?: Record<string, any>): Promise<IHttpResponse<T>> => {
    return this.http.put(url, data).then(this.handleResponse);
  };

  public deleter = async <T>(url: string): Promise<IHttpResponse<T>> => {
    return this.http.delete(url).then(this.handleResponse);
  };
}

export const { fetcher, poster, putter, deleter } = new Base();