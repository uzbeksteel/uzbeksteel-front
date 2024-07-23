import { history, successMessage } from '@/lib/utils';
import { CreateMagazineBody } from '@/pages/workshop/inspections/create/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from '../queries';

const cerateMagazine = async (body: CreateMagazineBody): Promise<CreateMagazineBody> => api.post(Endpoints.Magazine, body);

export const createMagazineMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: CreateMagazineBody) => cerateMagazine(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Magazine] });
            successMessage('Текширув яратилди!');
            history.back();
        },
    });
};
