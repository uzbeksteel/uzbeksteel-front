import { createQueryString } from '@/lib/helper';
import { IResponse, TParams } from '@/types/app';
import { IIntroBriefing, IPersonalCard } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

export const getBriefing = async (persoanlcardId: string) => {
    const response = await api.get<IIntroBriefing>(Endpoints.PersonalCard + '/' + Endpoints.IntroBriefing + '/byPersonalCardId/' + persoanlcardId);
    return response.data;
};

const findAll = async (search?: string): Promise<IResponse<IPersonalCard[]>> => {
    const responce: any = await api.get(Endpoints.PersonalCard + createQueryString({ search }));
    return responce;
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
        refetchOnWindowFocus: false,
    });

export const useGetPersonalCardsQuery = (search: string) =>
    useQuery<IResponse<IPersonalCard[]>>({
        queryKey: [Endpoints.PersonalCard, search],
        queryFn: () => findAll(search),
    });

export const useIntroBriefingQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.IntroBriefing, personalCardId],
        queryFn: async () => getBriefing(personalCardId),
        refetchInterval: 60 * 60 * 1000,
        enabled: !!personalCardId,
    });
};
