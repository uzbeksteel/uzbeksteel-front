import { IProfession } from '@/types/profession.ts';
import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { useQuery } from '@tanstack/react-query';
import { TParams } from '@/types/app';

export const getAllProfessionsQuery = () =>
    useQuery({
        queryKey: [Endpoints.Professions],
        queryFn: async (): Promise<IProfession[]> => await api.get(Endpoints.Professions),
    });

export const getOneProfessionQuery = (id: TParams) =>
    useQuery({
        queryKey: [Endpoints.Professions, id],
        queryFn: async (): Promise<IProfession> => await api.get(`${Endpoints.Professions}/${id}`),
        enabled: !!id,
    });
