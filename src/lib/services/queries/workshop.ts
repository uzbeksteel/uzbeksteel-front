import { IMainWorkshops, IWorkShopEmployes, IWorkshop } from '@/types/workshop';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const selectableWorkshops = async (): Promise<IMainWorkshops[]> => api.get(Endpoints.SelectbleWorkshops);
const selectableWorkshopEmpoyes = async (ref_key: string): Promise<IWorkShopEmployes[]> => api.get(`${Endpoints.SelectbleWorkshopEmployes}/${ref_key}`);
const getAllWorkshops = async (): Promise<IWorkshop[]> => (await api.get(Endpoints.Workshop)).data;

export const useSelectableWorkshopQuery = () =>
    useQuery<IMainWorkshops[]>({
        queryKey: [Endpoints.SelectbleWorkshops],
        queryFn: selectableWorkshops,
        initialData: [],
    });

export const selectableWShEmpoyesQuery = (ref_key: string) =>
    useQuery<IWorkShopEmployes[]>({
        queryKey: [Endpoints.SelectbleWorkshopEmployes, ref_key],
        queryFn: () => selectableWorkshopEmpoyes(ref_key),
        initialData: [],
        enabled: !!ref_key,
    });

export const getAllWorkshopsQuery = () =>
    useQuery<IWorkshop[]>({
        queryKey: [Endpoints.Workshop],
        queryFn: getAllWorkshops,
        initialData: [],
    });
