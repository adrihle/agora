import { IUser } from "@interfaces";
import { GetState, SetState } from 'zustand';

export interface IStore {
    user?: IUser,
    setUser: (user: IUser) => void;
    init: () => void;
};

export type ISet = SetState<IStore>;
export type IGet = GetState<IStore>;