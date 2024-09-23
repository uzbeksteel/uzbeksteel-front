import { TUser } from '@/types/users';
import { IUsers } from '@/types/workshop';

export const getLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
};

export const setLocalStorage = (key: string, value: any): void => localStorage.setItem(key, JSON.stringify(value));

export const removeLocalStorage = (key: string): void => localStorage.removeItem(key);

export const clearLocalStorage = (): void => localStorage.clear();

export const getUserStorge = (): TUser => {
    const user = localStorage.getItem('user') as string;
    return JSON.parse(user);
};
