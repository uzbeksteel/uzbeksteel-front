import { CONTROL_TYPE } from '@/constants';
import { buildQueryString, createQueryString } from '@/lib/helper';
import { IMagazine } from '@/types/magazine';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getMagazinesByType = async (type: CONTROL_TYPE, id: string): Promise<IMagazine[]> => {
    const params = {
        workshop: { id },
        magazine_type: type,
    };
    const responce = await api.get(Endpoints.Magazine + buildQueryString(params));
    return responce.data;
};

const findMagazineByUser = async (type: CONTROL_TYPE): Promise<IMagazine[]> => api.get(`${Endpoints.Magazine}/${Endpoints.User}` + createQueryString({ type }));

export const useGetMagzineByTypeQuery = (type: CONTROL_TYPE, id: string) =>
    useQuery<IMagazine[]>({
        queryKey: [Endpoints.Magazine, type, id],
        queryFn: () => getMagazinesByType(type, id),
        initialData: [],
    });

export const useGetMagzineByUserQuery = (type: CONTROL_TYPE) =>
    useQuery<IMagazine[]>({
        queryKey: [Endpoints.Magazine, type],
        queryFn: () => findMagazineByUser(type),
        initialData: [],
    });
