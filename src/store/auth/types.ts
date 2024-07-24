import { TUser } from '@/types/users.ts';

export interface IAuthStore {
    token: string | null;
    isAuth: boolean | null;
    isInitiated: boolean;
    user: TUser | null;

    logout: () => void;
    setToken: (token: string) => void;
    setIsAuth: (isAuth: boolean) => void;
    setIsInitiated: (isInitiated: boolean) => void;
    setUser: (user: TUser) => void;
}
