import { ISuccessResponse } from './api';
import { TUser } from '@/types/users.ts';

export type TLoginBody = {
    tabNumber: string;
    password: string;
};

export interface ILoginResponse extends ISuccessResponse<TUser> {
    accessToken: string;
    refreshToken: string;
}

export type TLoginData = {
    user_id: number;
    firstname: string;
    login: string;
    role: string;
    status: string;
    created_at: string;
};
