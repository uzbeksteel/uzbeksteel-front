import { ISuccessResponse } from './api';

export type TLoginBody = {
  login: string;
  password: string;
};

export interface ILoginResponse extends ISuccessResponse<TLoginData> {
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
