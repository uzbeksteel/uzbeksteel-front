import type { ILoginResponse, TLoginBody } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

export const login = async (body: TLoginBody): Promise<ILoginResponse> => await api.post(Endpoints.SignIn, body);

export const useLoginQuery = (onSuccess: (data: ILoginResponse) => void) =>
    useMutation({
        mutationFn: login,
        onSuccess,
    });
