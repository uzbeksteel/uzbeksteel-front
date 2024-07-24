import type { ILoginResponse, TLoginBody } from '@/types/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';
import { TUser } from '@/types/users.ts';

export const login = async (body: TLoginBody): Promise<ILoginResponse> => await api.post(Endpoints.SignIn, body);

export const getMe = async (): Promise<TUser> => await api.get(Endpoints.GetMe);

export const useLoginQuery = (onSuccess: (data: ILoginResponse) => void) =>
    useMutation({
        mutationFn: login,
        onSuccess,
    });

export const useGetMeQuery = () =>
    useQuery({
        queryKey: [Endpoints.GetMe],
        queryFn: getMe,
        initialData: {} as TUser,
    });
