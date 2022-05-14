import create, { StateCreator } from "zustand";
import { devtools } from 'zustand/middleware';
import { ISet, IStore } from "./user.interfaces";
import { IUser } from '@interfaces';

const state: StateCreator<IStore> = (set) => ({
    user: undefined,
    init: user => init(user, set)
});

const init = (user: IUser, set: ISet) => {
    if (!user) return;
    set(() => ({ user }));
};

export const useUser = create(devtools(state, { name: 'User State' }));