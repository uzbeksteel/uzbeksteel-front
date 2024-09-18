import { IProfession } from '@/types/profession.ts';
import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { useQuery } from '@tanstack/react-query';

const getAllProfessions = async (): Promise<IProfession[]> => await api.get(Endpoints.Professions);

export const getAllProfessionsQuery = () =>
    useQuery({
        queryKey: [Endpoints.Professions],
        queryFn: getAllProfessions,
        initialData: [],
    });
