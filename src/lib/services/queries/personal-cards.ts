import { IPersonalCard } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const findAllDocuments = async (): Promise<IPersonalCard[]> => {
    const responce = await api.get(Endpoints.PersonalCard);
    return responce.data;
};

export const usePersonalCardQuery = () =>
    useQuery<IPersonalCard[]>({
        queryKey: [Endpoints.PersonalCard],
        queryFn: findAllDocuments,
    });
