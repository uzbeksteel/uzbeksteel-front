import { dictionary } from '@/constants';
import type { IResponse, TParams } from '@/types/app';
import type { TUser, User1CType } from '@/types/users';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getUser1CByTabNumber = async (tubNumber: string): Promise<User1CType> => await api.get(`${Endpoints.Get1CUserByTabNumber}/${tubNumber}`);
const getUsers = async (page: number, limit: number, sortBy: string = 'id', order: 'ASC' | 'DESC' = 'DESC'): Promise<IResponse<TUser[]>> => {
    return api.get(Endpoints.Users, {
        params: {
            page,
            limit,
            sortBy,
            order,
        },
    });
};

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
        queryKey: [Endpoints.Get1CUserByTabNumber, tubNumber],
        queryFn: () => getUser1CByTabNumber(tubNumber),
        enabled: !!tubNumber,
    });

export const getUsersQuery = () =>
    useQuery({
        queryKey: [Endpoints.Users],
        queryFn: () => getUsers(1, 20),
        initialData: { data: [], meta: { itemsPerPage: 20, totalItems: 0, currentPage: 1, totalPages: 1, sortBy: [] } },
        select: (res) => res.data,
    });

export const useDeleteUserQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: deleteUser,
        onSuccess,
    });

export const useGetUsersWithPaginationQuery = (page: number = 1, limit: number = 50) =>
    useQuery<IResponse<TUser[]>>({
        queryKey: [Endpoints.Users, page, limit],
        queryFn: () => getUsers(page, limit),
    });
