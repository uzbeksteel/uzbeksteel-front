import { createQueryString } from '@/lib/helper';
import { IResponse, TParams } from '@/types/app';
import { IIntroBriefing, IPersonalCard, IWorkInitTraining } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

export const getIntroBriefing = async (persoanlcardId: string) => {
    const response: IIntroBriefing = await api.get(Endpoints.PersonalCard + '/' + Endpoints.IntroBriefing + '/byPersonalCardId/' + persoanlcardId);

    return response;
};

export const getInitWorkTraining = async (persoanlcardId: string) => {
    const responce: IWorkInitTraining = await api.get(Endpoints.InitWorkTraining + '/byPersonalCard/' + persoanlcardId);
    return responce;
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
        queryFn: () => getIntroBriefing(personalCardId),
        refetchInterval: 60 * 60 * 1000,
        enabled: !!personalCardId,
    });
};

export const useGetInitWorkTrainingQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.InitWorkTraining, personalCardId],
        queryFn: () => getInitWorkTraining(personalCardId),
        refetchInterval: 60 * 60 * 1000,
        enabled: !!personalCardId,
    });
};
