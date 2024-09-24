import { errorMessage, successMessage } from '@/lib/utils';
import { IEducationInfoBody } from '@/types/safety-info';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createEducationInfoMutation = (personalCard: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IEducationInfoBody) => api.post(Endpoints.EducationInfo, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.EducationInfo, personalCard] });
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

export const updateEducationInfoMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IEducationInfoBody) => api.patch(`${Endpoints.EducationInfo}/${id}`, body),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.EducationInfo, id] });
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
