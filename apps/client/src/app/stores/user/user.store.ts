import create, { StateCreator } from "zustand";
import { devtools } from 'zustand/middleware';
import { IGet, ISet, IStore } from "./user.interfaces";
import { IUser } from '@interfaces';
import { fetcher } from "@providers";
import { ISignResponse } from "../../pages/auth/auth.interface";
import React from "react";

const state: StateCreator<IStore> = (set, get) => ({
    user: undefined,
    setUser: (user) => setUser(user, set),
    init: () => init(set, get),
    clear: () => set({ user: undefined })
});

const setUser = (user: IUser, set: ISet) => {
    if (!user) return;
    set(() => ({ user }));
};

const init = async (set: ISet, get: IGet) => {
    const user = get().user;
    if (user) return true;
    const {status, data} = await fetcher<ISignResponse>('/auth');
    if (!data || status !== 200) return false;
    set(() => ({ user: data.user }));
    return true;
}

export const useUser = create(devtools(state, { name: 'User State' }));