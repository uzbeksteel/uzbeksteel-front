import { IBranches, IMainWorkshops, IUsers, IWorkshop, IWorkShopEmployes } from '@/types/workshop';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const selectableWorkshops = async (): Promise<IMainWorkshops[]> => api.get(Endpoints.SelectbleWorkshops);
const selectableWorkshopEmpoyes = async (ref_key: string): Promise<IWorkShopEmployes[]> => api.get(`${Endpoints.SelectbleWorkshopEmployes}/${ref_key}`);
const getAllWorkshops = async (): Promise<IWorkshop[]> => (await api.get(Endpoints.Workshop)).data;
const getWorkShopBranches = async (parent_ref_key?: string) => (await api.get(Endpoints.WorkShopBranches, { params: { parent_ref_key } })).data;
const getWorkShopBranchesByRef = async (ref: string): Promise<IBranches[]> => await api.get(Endpoints.WorkShopBranchesByRefKey + ref);
const getUserQuery = async (): Promise<IUsers[]> => (await api.get(Endpoints.Users)).data;

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

export const getAllWorkshopsQuery = (_id?: string) =>
    useQuery<IWorkshop[]>({
        queryKey: [Endpoints.Workshop],
        queryFn: getAllWorkshops,
        initialData: [],
        // enabled: !!id,
    });

export const getWorkShopBranchesQuery = (parent_ref_key?: string) =>
    useQuery<any[]>({
        queryKey: [Endpoints.WorkShopBranches, parent_ref_key],
        queryFn: () => getWorkShopBranches(parent_ref_key),
        initialData: [],
    });

export const getWorkShopBranchesByRefQuery = (ref: string) =>
    useQuery<IBranches[]>({
        queryKey: [Endpoints.WorkShopBranchesByRefKey, ref],
        queryFn: () => getWorkShopBranchesByRef(ref),
        initialData: [],
        enabled: !!ref,
    });

export const getEmployeeQuery = () =>
    useQuery<IUsers[]>({
        queryKey: [Endpoints.User],
        queryFn: () => getUserQuery(),
    });
