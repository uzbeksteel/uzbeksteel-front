import { successMessage } from '@/lib/utils';
import { ICreateActPayload } from '@/types/graphics';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

const createAct = async (body: ICreateActPayload): Promise<any> => api.post(Endpoints.Acts, body);

export const useActMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ICreateActPayload) => createAct(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Workshop] });
            successMessage('Далолатнома яратилди!');
            history.back();
        },
    });
};
