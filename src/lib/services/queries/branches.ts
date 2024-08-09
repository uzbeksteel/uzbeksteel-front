import { dictionary } from '@/constants';
import type { TParams } from '@/types/app';
import { IBranches } from '@/types/workshop';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getBranch = async (id: TParams): Promise<IBranches> => await api.get(Endpoints.Branches + `/${id}`);

const getBranches = async (search: string): Promise<IBranches[]> => {
    const data: IBranches[] = await api.get(Endpoints.Branches);

    const filteredBranches = data.filter((branch) => branch.НаименованиеПолное.toLowerCase().includes(search.toLowerCase() || ''));

    return filteredBranches;
};

const addBranch = async (body: any): Promise<IBranches> => await api.post(Endpoints.Branches, body);

const editBranch = async ({ id, body }: { id: TParams; body: any }): Promise<IBranches> => await api.patch(`${Endpoints.Branches}/${id}`, body);

const deleteBranch = async (id: TParams): Promise<IBranches> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.delete(Endpoints.Branches + `/${id}`);
    } finally {
        hideMessage();
    }
};

export const useGetBranchQuery = (id: TParams) =>
    useQuery<IBranches>({
        queryKey: [Endpoints.Branches, id],
        queryFn: () => getBranch(id),
    });

export const useGetBranchesQuery = (search: string) =>
    useQuery<IBranches[]>({
        queryKey: [Endpoints.Branches, search],
        queryFn: () => getBranches(search),
        initialData: [],
    });

export const useAddBranchQuery = (onSuccess: (data: IBranches) => void) =>
    useMutation({
        mutationFn: addBranch,
        onSuccess,
    });

export const useEditBranchQuery = (onSuccess: (data: IBranches) => void) =>
    useMutation({
        mutationFn: editBranch,
        onSuccess,
    });

export const useDeleteBranchQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: deleteBranch,
        onSuccess,
    });
