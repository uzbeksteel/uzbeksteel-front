import { dictionary } from '@/constants';
import { IImage, TImageBody, TParams } from '@/types/app';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getOne = async (id: number): Promise<IImage> => await api.get(`${Endpoints.Gallery}/${id}`);

const getGallery = async (): Promise<IImage[]> => await api.get(Endpoints.Gallery);

const addGallery = async (body: TImageBody): Promise<IImage> => await api.post(Endpoints.Gallery, body);

const editGallery = async ({ id, body }: { id: TParams; body: TImageBody }): Promise<IImage> => await api.patch(`${Endpoints.Gallery}/${id}`, body);

const deleteGallery = async (id: number): Promise<IImage[]> => {
    const hideMessage = message.loading(dictionary.loading, 0);

    try {
        return await api.delete(`${Endpoints.Gallery}/${id}`);
    } finally {
        hideMessage();
    }
};

export const useGetOneGalleryQuery = (id: number) =>
    useQuery<IImage>({
        queryKey: [Endpoints.Gallery, id],
        queryFn: () => getOne(id),
        enabled: !!id,
    });

export const useGetGalleryQuery = () =>
    useQuery<IImage[]>({
        queryKey: [Endpoints.Gallery],
        queryFn: getGallery,
        initialData: [],
    });

export const useAddGalleryQuery = (onSuccess: (data: IImage) => void) =>
    useMutation({
        mutationFn: addGallery,
        onSuccess,
    });

export const useEditGalleryQuery = (onSuccess: (data: IImage) => void) =>
    useMutation({
        mutationFn: editGallery,
        onSuccess,
    });

export const useDeleteGalleryQuery = (onSuccess: (data: any) => void) =>
    useMutation({
        mutationFn: deleteGallery,
        onSuccess,
    });
