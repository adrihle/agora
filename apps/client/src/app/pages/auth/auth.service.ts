import { APIService } from "@providers";
import { ISignin } from "./auth.interface";
import { IUser } from '@interfaces';
import { AxiosResponse } from "axios";

const AUTH_BASE_URL = '/auth/';

class Auth extends APIService {
    constructor(){
        super(AUTH_BASE_URL)
    };

    public signin = async (signin: ISignin) => {
        return this.http.post<ISignin, AxiosResponse<IUser>>('signin', signin);
    }
};

export const AuthService = new Auth();