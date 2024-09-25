import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { useQuery } from '@tanstack/react-query';
import { IHighDanger } from '@/types/high-dangers.ts';
import { IResponse } from '@/types/app.ts';

const getHighDangers = async (workshopId: string): Promise<IResponse<IHighDanger[]>> => api.get(Endpoints.HighDangers, { params: { 'filter.workshop.id': workshopId } });

const getHighDangerById = async (hihgDangerId: string): Promise<IHighDanger> => api.get(`${Endpoints.HighDangers}/${hihgDangerId}`);

export const useGetHighDangersQuery = (workshopId: string) =>
    useQuery({
        queryKey: [Endpoints.HighDangers, workshopId],
        queryFn: () => getHighDangers(workshopId),
        enabled: !!workshopId,
    });

export const useGetDangerByIdQuery = (highDangerId: string) =>
    useQuery({
        queryKey: [Endpoints.HighDangers, highDangerId],
        queryFn: () => getHighDangerById(highDangerId),
        enabled: !!highDangerId,
    });
