import { IDanger } from '@/types/danger.ts';
import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { useMutation, useQuery } from '@tanstack/react-query';

const getDangers = async (workshopId?: string): Promise<IDanger[]> => api.get(Endpoints.Dangers, { params: { workshopId } });

const createDanger = async (data: IDanger): Promise<IDanger> => api.post(Endpoints.Dangers, data);

export const useGetDangersQuery = (workshopId?: string) =>
    useQuery({
        queryKey: [Endpoints.Dangers, workshopId],
        queryFn: () => getDangers(workshopId),
        initialData: [],
    });

export const useCreateDangerQuery = (onSuccess: (data: IDanger) => void) =>
    useMutation({
        mutationFn: createDanger,
        onSuccess,
    });
