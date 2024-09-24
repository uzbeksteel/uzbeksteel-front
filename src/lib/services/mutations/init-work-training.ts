import { history, successMessage } from '@/lib/utils';
import { IInitWorkTrainingBody } from '@/types/init-work-training';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createInitWorkTrainingMutation = (persoanlCardId: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IInitWorkTrainingBody) => api.post(Endpoints.InitWorkTraining, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.InitWorkTraining, persoanlCardId] });
            successMessage('яратилди!');
            history.back();
        },
    });
};
