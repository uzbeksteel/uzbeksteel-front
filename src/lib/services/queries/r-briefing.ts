import { TParams } from '@/types/app';
import { IEmerganceyBreafing } from '@/types/emergancy-breafing';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '.';
import { api } from '../api';

const findRepeatByPersonal = async (id: string): Promise<IEmerganceyBreafing[]> => {
    const responce: IEmerganceyBreafing[] = await api.get(`${Endpoints.RepeatBriefingByPersonal}/${id}`);
    return responce;
};

const findOneRepeat = async (id: string): Promise<IEmerganceyBreafing> => {
    const responce: IEmerganceyBreafing = await api.get(`${Endpoints.RepeatBriefing}/${id}`);
    return responce;
};

export const useRepeatPerconalQuery = (personalCard: string) =>
    useQuery({
        queryKey: [Endpoints.RepeatBriefingByPersonal, personalCard],
        queryFn: () => findRepeatByPersonal(personalCard),
        initialData: [],
    });

export const useOneRepeatQuery = (id: TParams) =>
    useQuery({
        queryKey: [Endpoints.RepeatBriefing, id],
        queryFn: () => findOneRepeat(id),
        enabled: !!id,
    });
