import { history, successMessage } from '@/lib/utils';
import { CreateUserBody, TUser } from '@/types/users';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from '../queries';

const cerateUser = async (body: CreateUserBody): Promise<TUser> => api.post(Endpoints.Users, body);

export const useCreateUserMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: CreateUserBody) => cerateUser(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Users] });
            successMessage('Ходим яратилди!');
            history.back();
        },
    });
};
