import { history, successMessage } from '@/lib/utils';
import { IIntroBriefingPayload } from '@/pages/tb/personal-cards/details/steps/intro-briefing/MutateIntroBriefing';
import { IPersonalCard, IPersonalCardPayload } from '@/types/personal-cards';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from '../queries';

const createPersonalCard = (body: IPersonalCardPayload) => api.post<IPersonalCard>(Endpoints.PersonalCard, body);

export const usePersonalCardCreate = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IPersonalCardPayload) => createPersonalCard(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.PersonalCard] });
            successMessage('Личная карточка яратилди!');
            history.back();
        },
    });
};

export const usePersonalCardUpdate = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: Partial<IPersonalCardPayload>) => api.patch<IPersonalCard>(`${Endpoints.PersonalCard}/${id}`, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.PersonalCard, id] });
            successMessage('Личная карточка ажурирована!');
            history.back();
        },
    });
};

export const createIntroBriefingMutation = (persoanlCardId: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IIntroBriefingPayload) => api.post<string>(Endpoints.PersonalCard + '/' + Endpoints.IntroBriefing, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.IntroBriefing, persoanlCardId] });
            successMessage('Интро брифинг яратилди!');
            history.back();
        },
    });
};
