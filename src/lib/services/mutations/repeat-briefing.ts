import { errorMessage, successMessage } from '@/lib/utils';
import { IRepeatBriefingBody } from '@/types/safety-info';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createRepeatBriefingMutation = (personalCard: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IRepeatBriefingBody) => api.post(Endpoints.RepeatBriefing, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.RepeatBriefing, personalCard] });
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

export const updateRepeatBriefingMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IRepeatBriefingBody) => api.patch(`${Endpoints.RepeatBriefing}/${id}`, body),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.RepeatBriefing, id] });
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
