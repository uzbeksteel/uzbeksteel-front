import { errorMessage, successMessage } from '@/lib/utils';
import { ISafetyNotesBody } from '@/types/safety-info';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createSafetyNotesMutation = (personalCard: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ISafetyNotesBody) => api.post(Endpoints.SafetyNotes, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.SafetyNotes, personalCard] });
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

export const updateSafetyNotesMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ISafetyNotesBody) => api.patch(`${Endpoints.SafetyNotes}/${id}`, body),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.SafetyNotes, id] });
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
