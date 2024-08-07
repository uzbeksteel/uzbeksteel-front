import { CONTROL_TYPE } from '@/constants';
import { createQueryString } from '@/lib/helper';
import { IMagazine } from '@/types/magazine';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getMagazinesByType = async (type: CONTROL_TYPE): Promise<IMagazine[]> => api.get(Endpoints.Magazine + createQueryString({ type }));
const findMagazineByUser = async (type: CONTROL_TYPE): Promise<IMagazine[]> => api.get(`${Endpoints.Magazine}/${Endpoints.User}` + createQueryString({ type }));

export const useGetMagzineByTypeQuery = (type: CONTROL_TYPE) =>
    useQuery<IMagazine[]>({
        queryKey: [Endpoints.Magazine, type],
        queryFn: () => getMagazinesByType(type),
        initialData: [],
    });

export const useGetMagzineByUserQuery = (type: CONTROL_TYPE) =>
    useQuery<IMagazine[]>({
        queryKey: [Endpoints.Magazine, type],
        queryFn: () => findMagazineByUser(type),
        initialData: [],
    });
