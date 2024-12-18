import { createQueryString } from '@/lib/helper';
import { IResponse, TParams } from '@/types/app';
import { IEmerganceyBreafing } from '@/types/emergancy-breafing';
import { IIntroBriefing, IOrder, IPersonalCard, IPersonalCardMedical, IRepatBriefing, ISafetyInfo, ISafetyNotes, IWorkInitTraining, IWorkPermission } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

export const getSafetyInfo = async (persoanlcardId: string, search?: string) => {
    const response: any = await api.get(`${Endpoints.SafetyInfo}/byPersonalcard?filter.personalCard.id=${persoanlcardId}${search?.length ? `&search=${search}` : ''}`);
    return response;
};

export const findOneSafetyInfo = async (id: string) => {
    const responce: ISafetyInfo = await api.get(`${Endpoints.SafetyInfo}/${id}`);
    return responce;
};

export const findOneEducationInfo = async (id: string) => {
    const responce: any = await api.get(`${Endpoints.EducationInfo}/${id}`);
    return responce;
};

export const findOneSafetyNote = async (id: string) => {
    const responce: any = await api.get(`${Endpoints.SafetyNotes}/${id}`);
    return responce;
};

export const getSafetyNotes = async (persoanlcardId: string, search?: string) => {
    const response: any = await api.get(`${Endpoints.SafetyNotes}/byPersonalcard?filter.personalCard.id=${persoanlcardId}${search?.length ? `&search=${search}` : ''}`);
    return response;
};

export const getEnergencyBriefing = async (personalCardId: string, search?: string) => {
    const response: any = await api.get(`${Endpoints.EmergancyBriefing}/byPersonalcard?filter.personalCard.id=${personalCardId}${search?.length ? `&search=${search}` : ''}`);
    return response;
};

export const getEducationInfo = async (personalCardId: string, search?: string) => {
    const response: any = await api.get(`${Endpoints.EducationInfo}/byPersonalcard?filter.personalCard.id=${personalCardId}${search?.length ? `&search=${search}` : ''}`);
    return response;
};

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

const findAll = async (search?: string, id?: string): Promise<IResponse<IPersonalCard[]>> => {
    const responce: any = await api.get(Endpoints.PersonalCard + createQueryString({ search, 'filter.workshop.id': id }));
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

export const useGetPersonalCardsQuery = (search: string, id?: string) =>
    useQuery<IResponse<IPersonalCard[]>>({
        queryKey: [Endpoints.PersonalCard, search, id],
        queryFn: () => findAll(search, id),
    });

export const useIntroBriefingQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.IntroBriefing, personalCardId],
        queryFn: () => getIntroBriefing(personalCardId),
        enabled: !!personalCardId,
    });
};

export const useGetInitWorkTrainingQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.InitWorkTraining, personalCardId],
        queryFn: () => getInitWorkTraining(personalCardId),
        enabled: !!personalCardId,
    });
};

export const useGetOrderQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.Order, personalCardId],
        queryFn: () => getOrder(personalCardId),
        enabled: !!personalCardId,
    });
};

export const useGetWorkPermissionQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.WorkPermission, personalCardId],
        queryFn: () => getWorkPermission(personalCardId),
        enabled: !!personalCardId,
    });
};
//test
export const usePersonalCardMedicalQuery = (personalCardId: string) => {
    return useQuery({
        queryKey: [Endpoints.PersonalCardMedicalPersonal, personalCardId],
        queryFn: () => getHealthResults(personalCardId),
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

export const useSafetyInfoQuery = (personalCardId: string, search?: string) => {
    return useQuery<IResponse<ISafetyInfo[]>>({
        queryKey: [Endpoints.SafetyInfo, personalCardId, search],
        queryFn: () => getSafetyInfo(personalCardId, search),
        enabled: !!personalCardId,
    });
};

export const useEmergencyBriefingQuery = (personalCardId: string, search?: string) => {
    return useQuery<IResponse<IEmerganceyBreafing[]>>({
        queryKey: [Endpoints.EmergancyBriefing, personalCardId, search],
        queryFn: () => getEnergencyBriefing(personalCardId, search),
        enabled: !!personalCardId,
    });
};

export const useEducationInfoQuery = (personalCardId: string, search?: string) => {
    return useQuery({
        queryKey: [Endpoints.EducationInfo, personalCardId, search],
        queryFn: () => getEducationInfo(personalCardId, search),
        enabled: !!personalCardId,
    });
};

export const useSafetyNotesQuery = (personalCardId: string, search?: string) => {
    return useQuery<IResponse<IRepatBriefing[]>>({
        queryKey: [Endpoints.SafetyInfo, personalCardId, search],
        queryFn: () => getSafetyNotes(personalCardId, search),
        enabled: !!personalCardId,
    });
};

export const useOneSafetyInfoQuery = (id: string, type: string) => {
    return useQuery<ISafetyInfo>({
        queryKey: [Endpoints.SafetyInfo, id],
        queryFn: () => findOneSafetyInfo(id),
        enabled: !!type,
        refetchOnWindowFocus: false,
    });
};

export const useOneEducationInfoQuery = (id: string, type: string) => {
    return useQuery({
        queryKey: [Endpoints.EducationInfo, id],
        queryFn: () => findOneEducationInfo(id),
        enabled: !!type,
        refetchOnWindowFocus: false,
    });
};

export const useOneSafetyNoteQuery = (id: string, type: string) => {
    return useQuery<ISafetyNotes>({
        queryKey: [Endpoints.SafetyNotes, id],
        queryFn: () => findOneSafetyNote(id),
        enabled: !!type,
        refetchOnWindowFocus: false,
    });
};
