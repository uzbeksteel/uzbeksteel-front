import { TUser } from '@/types/users.ts';
import { ISuccessResponse } from './api';

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

export interface IRegisterDevicePayload {
    deviceToken: string;
}
