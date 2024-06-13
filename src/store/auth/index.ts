import { clearLocalStorage, getLocalStorage, setLocalStorage, TOKEN } from '@/lib/utils';
import { create } from 'zustand';
import { createSelectors } from '../createSelectors';
import { IAuthStore } from './types';

const useAppBase = create<IAuthStore>()((set) => ({
    token: getLocalStorage(TOKEN),
    isAuth: null,
    isInitiated: true,

    logout: () =>
        set((state) => {
            clearLocalStorage();

            return {
                ...state,
                token: null,
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
}));

export const useAuthStore = createSelectors(useAppBase);

export const initializeAuthStore = () => {
    const { logout } = useAuthStore.getState();

    return {
        logout,
    };
};
