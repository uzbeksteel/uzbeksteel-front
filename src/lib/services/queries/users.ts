import { dictionary } from '@/constants';
import type { TParams } from '@/types/app';
import type { TUser } from '@/types/users';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getUsers = async (search: string): Promise<TUser[]> => {
    const data: TUser[] = await api.get(Endpoints.Users);

    const filteredUsers = data.filter((user) => user.firstname.toLowerCase().includes(search.toLowerCase() || ''));

    return filteredUsers;
};

const deleteUser = async (id: TParams): Promise<TUser> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.get(`${Endpoints.Users}/${id}`);
    } finally {
        hideMessage();
    }
};

export const useGetUsersQuery = (search: string) =>
    useQuery<TUser[]>({
        queryKey: [Endpoints.Users, search],
        queryFn: () => getUsers(search),
        initialData: [],
    });

export const useDeleteUserQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: deleteUser,
        onSuccess,
    });
