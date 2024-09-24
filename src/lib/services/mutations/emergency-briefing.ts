import { errorMessage, successMessage } from '@/lib/utils';
import { IRepeatBriefingBody } from '@/types/safety-info';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createEmergencyBriefingMutation = (personalCard: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IRepeatBriefingBody) => api.post(Endpoints.EmergancyBriefing, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.EmergancyBriefing, personalCard] });
            successMessage('яратилди!');
            history.back();
        },
        onError(error: any) {
            if (error?.message && typeof error.message === 'object') {
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

export const updateEmergencyBriefingMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IRepeatBriefingBody) => api.patch(`${Endpoints.EmergancyBriefing}/${id}`, body),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.EmergancyBriefing, id] });
            successMessage('Амжилттай шинэчилэнг!');
            history.back();
        },
        onError(error: any) {
            if (error?.message && typeof error.message === 'object') {
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
