import { clearLocalStorage, getLocalStorage, setLocalStorage, TOKEN, USER } from '@/lib/utils';
import { create } from 'zustand';
import { createSelectors } from '../createSelectors';
import { IAuthStore } from './types';
import { fromBase64, toBase64 } from '@/lib/utils/base64.ts';

const useAppBase = create<IAuthStore>()((set) => ({
    token: getLocalStorage(TOKEN),
    isAuth: null,
    isInitiated: true,
    user: fromBase64(getLocalStorage(USER)),

    logout: () =>
        set((state) => {
            clearLocalStorage();

            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
            };
        }),
    setToken: (token) =>
        set((state) => {
            setLocalStorage(TOKEN, token);

            return {
                ...state,
                token,
                isAuth: true,
            };
        }),
    setIsAuth: (isAuth) => set(() => ({ isAuth })),
    setIsInitiated: (isInitiated) => set(() => ({ isInitiated })),
    setUser: (user) =>
        set(() => {
            setLocalStorage(USER, toBase64(user));
            return { user };
        }),
}));

export const useAuthStore = createSelectors(useAppBase);

export const initializeAuthStore = () => {
    const { logout } = useAuthStore.getState();

    return {
        logout,
    };
};
