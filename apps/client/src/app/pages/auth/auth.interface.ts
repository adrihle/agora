import { IUser } from "@interfaces";

export interface ISignin {
    email: string;
    password: string;
};

export interface ISignup extends ISignin {
    name: string;
    image?: string;
}

export interface ISignResponse {
    user: IUser;
    token: string;
}
