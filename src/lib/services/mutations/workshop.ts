import { history, successMessage } from '@/lib/utils';
import { CreateWorkShopBody } from '@/types/workshop';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from '../queries';

const cerateWorkshop = async (body: CreateWorkShopBody): Promise<any> => api.post(Endpoints.Workshop, body);

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
