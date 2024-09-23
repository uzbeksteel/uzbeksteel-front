import { IResponse, TParams } from '@/types/app';
import { IEmerganceyBreafing } from '@/types/emergancy-breafing';
import { IRepatBriefing } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '.';
import { api } from '../api';

export const findRepeatByPersonal = async (persoanlcardId: string, search?: string) => {
    const response: any = await api.get(`${Endpoints.RepeatBriefing}/byPersonalcard?filter.personalCard.id=${persoanlcardId}${search?.length ? `&search=${search}` : ''}`);
    return response;
};

const findOneRepeat = async (id: string): Promise<IEmerganceyBreafing> => {
    const responce: IEmerganceyBreafing = await api.get(`${Endpoints.RepeatBriefing}/${id}`);
    return responce;
};

export const useRepeatPersonalQuery = (personalCardId: string, search?: string) => {
    return useQuery<IResponse<IRepatBriefing[]>>({
        queryKey: [Endpoints.SafetyInfo, personalCardId, search],
        queryFn: () => findRepeatByPersonal(personalCardId, search),
        refetchInterval: 60 * 60 * 1000,
        enabled: !!personalCardId,
    });
};

export const useOneRepeatQuery = (id: TParams) =>
    useQuery({
        queryKey: [Endpoints.RepeatBriefing, id],
        queryFn: () => findOneRepeat(id),
        enabled: !!id,
    });
