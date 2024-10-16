import { history, successMessage } from '@/lib/utils';
import { CreateWorkShopBody, IBodyWorkshopBranches, IWorkshopBranchUser } from '@/types/workshop';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from '../queries';

const createWorkshop = async (body: CreateWorkShopBody): Promise<any> => api.post(Endpoints.Workshop, body);

const createWorkshopBranches = async (body: IBodyWorkshopBranches) => api.post(Endpoints.WorkShopBranches, body);

const addWorkshopBranchMaster = async (body: IWorkshopBranchUser) => api.post(Endpoints.WorkShopBranchesAddUser, body);

export const useWorkshopMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: CreateWorkShopBody) => createWorkshop(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Workshop] });
            successMessage('Цеҳ яратилди!');
            history.back();
        },
    });
};

export const useWorkshopBranchesMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IBodyWorkshopBranches) => createWorkshopBranches(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.WorkShopBranches] });
            successMessage('Цех болими яратилди!');
            history.back();
        },
    });
};

export const useAddWorkshopBranchMasterMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addWorkshopBranchMaster,
        onSuccess: () => {
            {
                queryClient.invalidateQueries({ queryKey: [Endpoints.WorkShopBranches] });
                successMessage('Цех ходими яратилди!');
                history.back();
            }
        },
    });
};
