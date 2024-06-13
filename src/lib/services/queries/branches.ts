import { dictionary } from '@/constants';
import type { TParams } from '@/types/app';
import type { IBranch } from '@/types/branches';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getBranch = async (id: TParams): Promise<IBranch> => await api.get(Endpoints.Branches + `/${id}`);

const getBranches = async (search: string): Promise<IBranch[]> => {
    const data: IBranch[] = await api.get(Endpoints.Branches);

    const filteredBranches = data.filter((branch) => branch.name.ru.toLowerCase().includes(search.toLowerCase() || ''));

    return filteredBranches;
};

const addBranch = async (body: any): Promise<IBranch> => await api.post(Endpoints.Branches, body);

const editBranch = async ({ id, body }: { id: TParams; body: any }): Promise<IBranch> => await api.patch(`${Endpoints.Branches}/${id}`, body);

const deleteBranch = async (id: TParams): Promise<IBranch> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.delete(Endpoints.Branches + `/${id}`);
    } finally {
        hideMessage();
    }
};

export const useGetBranchQuery = (id: TParams) =>
    useQuery<IBranch>({
        queryKey: [Endpoints.Branches, id],
        queryFn: () => getBranch(id),
    });

export const useGetBranchesQuery = (search: string) =>
    useQuery<IBranch[]>({
        queryKey: [Endpoints.Branches, search],
        queryFn: () => getBranches(search),
        initialData: [],
    });

export const useAddBranchQuery = (onSuccess: (data: IBranch) => void) =>
    useMutation({
        mutationFn: addBranch,
        onSuccess,
    });

export const useEditBranchQuery = (onSuccess: (data: IBranch) => void) =>
    useMutation({
        mutationFn: editBranch,
        onSuccess,
    });

export const useDeleteBranchQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: deleteBranch,
        onSuccess,
    });
