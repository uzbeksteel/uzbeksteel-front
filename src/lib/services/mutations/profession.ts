import { IProfession, IProfessionPayload } from '@/types/profession';
import { api } from '../api';
import { Endpoints } from '../queries';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { successMessage } from '@/lib/utils';
import { TParams } from '../../../types/app';

export const useCreateProfession = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (body: IProfessionPayload): Promise<IProfession> => await api.post(`${Endpoints.Professions}`, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Professions] });
            successMessage('Касб яратилди!');
            history.back();
        },
    });
};

export const useUpdateProfession = (id: TParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (body: IProfessionPayload) => await api.patch(`${Endpoints.Professions}/${id}`, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Professions, id] });
            successMessage('Касб ўзгартилилди!');
            history.back();
        },
    });
};

export const useDeleteProfession = (id: TParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => await api.delete(`${Endpoints.Professions}/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Professions, id] });
            successMessage('Касб ўчирилди!');
            history.back();
        },
    });
};
