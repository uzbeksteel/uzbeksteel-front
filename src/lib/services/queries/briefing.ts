import { IBriefing } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const getSelectableBrieifng = async () => {
    const response = (await api.get<IBriefing[]>(Endpoints.Briefing + '/selectable')) as unknown as IBriefing[];
    return response;
};

export const useSelectableBrieifngQuery = () => {
    return useQuery<IBriefing[]>({
        queryKey: [Endpoints.Briefing],
        queryFn: () => getSelectableBrieifng(),
    });
};
