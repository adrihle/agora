import { HttpService, IHttpResponse } from "@providers";
import { ISignin, ISignResponse, ISignup } from "./auth.interface";

const AUTH_BASE_URL = '/auth';

class Auth extends HttpService {
    constructor(){
        super(AUTH_BASE_URL)
    };

    public signin = async (signin: ISignin) => {
        return this.http.post<ISignin, IHttpResponse<ISignResponse>>('/signin', signin);
    }

    public signup = async (signup: ISignup) => {
        return this.http.post<ISignup, IHttpResponse<ISignResponse>>('/signup', signup);
    }
};

export const AuthService = new Auth();