import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { useQuery } from '@tanstack/react-query';
import { IHighDanger } from '@/types/high-dangers.ts';
import { IResponse } from '@/types/app.ts';

const getHighDangers = async (workshopId: string): Promise<IResponse<IHighDanger[]>> => api.get(Endpoints.HighDangers, { params: { 'filter.workshop.id': workshopId } });

export const useGetHighDangersQuery = (workshopId: string) =>
    useQuery({
        queryKey: [Endpoints.HighDangers, workshopId],
        queryFn: () => getHighDangers(workshopId),
        enabled: !!workshopId,
    });
