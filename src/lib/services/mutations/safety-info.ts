import { errorMessage, successMessage } from '@/lib/utils';
import { ISafetyInfoBody } from '@/types/safety-info';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createSafetyInfoMutation = (personalCard: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ISafetyInfoBody) => api.post(Endpoints.SafetyInfo, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.SafetyInfo, personalCard] });
            successMessage('яратилди!');
            history.back();
        },
        onError(error: any) {
            if (error?.message) {
                for (let i = 0; i < error.message.length; i++) {
                    const element = error.message[i];
                    errorMessage(element);
                }
            } else if (error.name) {
                errorMessage(error.name);
            }
        },
    });
};

export const updateSafetyInfoMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ISafetyInfoBody) => api.patch(`${Endpoints.SafetyInfo}/${id}`, body),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.SafetyInfo, id] });
            successMessage('Амжилттай шинэчилэнг!');
            history.back();
        },
        onError(error: any) {
            if (error?.message) {
                for (let i = 0; i < error.message.length; i++) {
                    const element = error.message[i];
                    errorMessage(element);
                }
            } else if (error.name) {
                errorMessage(error.name);
            }
        },
    });
};
