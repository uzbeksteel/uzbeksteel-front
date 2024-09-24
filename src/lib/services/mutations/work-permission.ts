import { errorMessage, successMessage } from '@/lib/utils';
import { IWorkPermissionBody } from '@/types/work-permission';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const createWorkPermissionMutation = (personalCard: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IWorkPermissionBody) => api.post(Endpoints.WorkPermission, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.WorkPermission, personalCard] });
            successMessage(' яратилди!');
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
