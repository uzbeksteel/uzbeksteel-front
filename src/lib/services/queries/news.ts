import { dictionary } from '@/constants';
import { TParams } from '@/types/app';
import { INews } from '@/types/news';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getNews = async (): Promise<INews[]> => await api.get(Endpoints.News);

const getSingleNews = async (id: TParams): Promise<INews> => await api.get(`${Endpoints.News}/${id}`);

const addNews = async (body: any): Promise<INews> => await api.post(Endpoints.News, body);

const editNews = async ({ id, body }: { id: TParams; body: any }): Promise<INews> => await api.patch(`${Endpoints.News}/${id}`, body);

const deleteNews = async (id: number): Promise<INews> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.delete(`${Endpoints.News}/${id}`);
    } finally {
        hideMessage();
    }
};

export const useGetNewsQuery = () =>
    useQuery<INews[]>({
        queryKey: [Endpoints.News],
        queryFn: getNews,
        initialData: [],
    });

export const useGetSingleNewsQuery = (id: TParams) =>
    useQuery<INews>({
        queryKey: [Endpoints.News, id],
        queryFn: () => getSingleNews(id),
        enabled: !!id,
    });

export const useAddNewsQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: addNews,
        onSuccess,
    });

export const useEditNewsQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: editNews,
        onSuccess,
    });

export const useDeleteNewsQuery = (onSuccess: (data: INews) => void) =>
    useMutation({
        mutationFn: deleteNews,
        onSuccess,
    });
