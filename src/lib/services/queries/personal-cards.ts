<<<<<<< HEAD
import { TParams } from '@/types/app';
=======
import { createQueryString } from '@/lib/helper';
import { IResponse, TParams } from '@/types/app';
>>>>>>> 953d1b2b8c6445fbd01fa3acb96c8aaa225495e0
import { IPersonalCard } from '@/types/personal-cards';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

<<<<<<< HEAD
const findAll = async (): Promise<IPersonalCard[]> => {
    const responce = await api.get(Endpoints.PersonalCard);
    return responce.data;
=======
const findAll = async (search?: string): Promise<IResponse<IPersonalCard[]>> => {
    const responce: any = await api.get(Endpoints.PersonalCard + createQueryString({ search }));
    return responce;
>>>>>>> 953d1b2b8c6445fbd01fa3acb96c8aaa225495e0
};

const findOne = async (id: TParams): Promise<IPersonalCard> => {
    const responce: IPersonalCard = await api.get(`${Endpoints.PersonalCard}/${id}`);
    return responce;
};

export const useGetPersonalCardQuery = (id: TParams) =>
    useQuery<IPersonalCard>({
        queryKey: [Endpoints.PersonalCard, id],
        queryFn: () => findOne(id),
        enabled: !!id,
<<<<<<< HEAD
    });

export const useGetPersonalCardsQuery = () =>
    useQuery<IPersonalCard[]>({
        queryKey: [Endpoints.PersonalCard],
        queryFn: findAll,
=======
        refetchOnWindowFocus: false,
    });

export const useGetPersonalCardsQuery = (search: string) =>
    useQuery<IResponse<IPersonalCard[]>>({
        queryKey: [Endpoints.PersonalCard, search],
        queryFn: () => findAll(search),
>>>>>>> 953d1b2b8c6445fbd01fa3acb96c8aaa225495e0
    });
