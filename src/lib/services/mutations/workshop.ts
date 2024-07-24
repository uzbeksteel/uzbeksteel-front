import { history, successMessage } from '@/lib/utils';
import { CreateWorkShopBody, IBodyWorkshopBranches } from '@/types/workshop';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from '../queries';

const cerateWorkshop = async (body: CreateWorkShopBody): Promise<any> => api.post(Endpoints.Workshop, body);

const createWorkshopBranches = async (body: IBodyWorkshopBranches) => api.post(Endpoints.WorkShopBranches, body);

export const useWorkshopMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: CreateWorkShopBody) => cerateWorkshop(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Workshop] });
            successMessage('Цеҳ яратилди!');
            history.back();
        },
    });
};

export const useWorkshopBranchesMuation = () => {
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
