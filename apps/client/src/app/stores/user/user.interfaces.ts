import { IUser } from "@interfaces";
import React from "react";
import { GetState, SetState } from 'zustand';

export interface IStore {
    user?: IUser,
    setUser: (user: IUser) => void;
    init: () => Promise<boolean>;
    clear: () => void;
};

export type ISet = SetState<IStore>;
export type IGet = GetState<IStore>;