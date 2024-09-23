import { IProgram } from '@/types/program';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

export const getPrograms = async () => (await api.get<IProgram[]>(Endpoints.Program + `/selectable`)) as unknown as IProgram[];

export const useProgramQuery = () => {
    return useQuery<IProgram[]>({
        queryKey: [Endpoints.Program],
        queryFn: async () => await getPrograms(),
    });
};
