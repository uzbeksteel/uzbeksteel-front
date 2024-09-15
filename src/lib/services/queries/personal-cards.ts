import { TParams } from '@/types/app';
import { IPersonalCard } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const findAll = async (): Promise<IPersonalCard[]> => {
    const responce = await api.get(Endpoints.PersonalCard);
    return responce.data;
};

const findOne = async (id: TParams): Promise<IPersonalCard> => {
    const responce: IPersonalCard = await api.get(`${Endpoints.PersonalCard}/${id}`);
    return responce;
};

export const useGetPersonalCardQuery = (id: TParams) =>
    useQuery<IPersonalCard>({
        queryKey: [Endpoints.PersonalCard, id],
        queryFn: () => findOne(id),
        enabled: !!id,
    });

export const useGetPersonalCardsQuery = () =>
    useQuery<IPersonalCard[]>({
        queryKey: [Endpoints.PersonalCard],
        queryFn: findAll,
    });
