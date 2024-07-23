import { dictionary } from '@/constants';
import type { TParams } from '@/types/app';
import type { TUser, User1CType } from '@/types/users';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getUser1CByTabNumber = async (tubNumber: string): Promise<User1CType> => await api.get(`${Endpoints.Get1CUserByTabNumber}/${tubNumber}`);
const getUsers = async (): Promise<TUser[]> => (await api.get(Endpoints.Users)).data;

const deleteUser = async (id: TParams): Promise<TUser> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.get(`${Endpoints.Users}/${id}`);
    } finally {
        hideMessage();
    }
};

export const getUser1CByTabNumberQuery = (tubNumber: string) =>
    useQuery<User1CType>({
        queryKey: [Endpoints.Get1CUserByTabNumber],
        queryFn: () => getUser1CByTabNumber(tubNumber),
        enabled: !!tubNumber,
    });

export const getUsersQuery = () =>
    useQuery<TUser[]>({
        queryKey: [Endpoints.Users],
        queryFn: () => getUsers(),
        initialData: [],
    });

export const useDeleteUserQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: deleteUser,
        onSuccess,
    });
