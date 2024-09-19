import { createQueryString } from '@/lib/helper';
import { IResponse, TParams } from '@/types/app';
import { IIntroBriefing, IOrder, IPersonalCard, IPersonalCardMedical, IWorkInitTraining, IWorkPermission } from '@/types/personal-cards';
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

export const getOrder = async (persoanlcardId: string) => {
    const responce: IOrder = await api.get(`${Endpoints.Order}/byPersonalCard/${persoanlcardId}`);
    return responce;
};

export const getWorkPermission = async (persoanlcardId: string) => {
    const responce: IWorkPermission = await api.get(`${Endpoints.WorkPermission}/byPersonalCard/${persoanlcardId}`);
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

const getHealthResults = async (id: TParams): Promise<IPersonalCardMedical[]> => {
    const responce: IPersonalCardMedical[] = await api.get(`${Endpoints.PersonalCardMedicalPersonal}/${id}`);
    return responce;
};

const findOneHealthResults = async (id: TParams): Promise<IPersonalCardMedical> => {
    const responce: IPersonalCardMedical = await api.get(`${Endpoints.PersonalCardMedical}/${id}`);
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

export const useGetOrderQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.Order, personalCardId],
        queryFn: () => getOrder(personalCardId),
        refetchInterval: 60 * 60 * 1000,
        enabled: !!personalCardId,
    });
};

export const useGetWorkPermissionQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.WorkPermission, personalCardId],
        queryFn: () => getWorkPermission(personalCardId),
        refetchInterval: 60 * 60 * 1000,
        enabled: !!personalCardId,
    });
};

export const usePersonalCardMedicalQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.PersonalCardMedicalPersonal, personalCardId],
        queryFn: () => getHealthResults(personalCardId),
        refetchInterval: 60 * 60 * 1000,
        enabled: !!personalCardId,
    });
};

export const useGetPersonalCardMedicalQuery = (id: TParams) =>
    useQuery<IPersonalCardMedical>({
        queryKey: [Endpoints.PersonalCardMedical, id],
        queryFn: () => findOneHealthResults(id),
        enabled: !!id,
        refetchOnWindowFocus: false,
    });
