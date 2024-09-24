import { errorMessage, successMessage } from '@/lib/utils';
import { IOrderBody } from '@/types/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createOrderMutation = (personalCard: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IOrderBody) => api.post(Endpoints.Order, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Order, personalCard] });
            successMessage(' яратилди!');
            history.back();
        },
        onError(error: any) {
            if (error?.message) {
                for (let i = 0; i < error.message.length; i++) {
                    const element = error.message[i];
                    errorMessage(element);
                }
            }
        },
    });
};
