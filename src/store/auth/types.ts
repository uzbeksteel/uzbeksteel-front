import { TUser } from '@/types/users.ts';

export interface IAuthStore {
    token: string | null;
    isAuth: boolean | null;
    isInitiated: boolean;
    user: TUser | null;
    fcmToken: string | null;

    logout: () => void;
    setToken: (token: string) => void;
    setIsAuth: (isAuth: boolean) => void;
    setIsInitiated: (isInitiated: boolean) => void;
    setUser: (user: TUser) => void;
    setFcmToken: (fcmToken: string) => void;
}
