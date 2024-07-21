import { dictionary } from '@/constants';
import { Endpoints } from '@/lib/services';
import { api } from '@/lib/services/api';
import { IGraphic } from '@/types/graphics.ts';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';

const getGraphics = async (): Promise<IGraphic[]> => await api.get(Endpoints.Graphic);

const getGraphicsByDate = async (date?: string): Promise<IGraphic[]> => await api.get(Endpoints.Graphic, { params: { date } });

const getGraphicById = async (id: string): Promise<IGraphic> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.get(`${Endpoints.Graphic}/${id}`);
    } finally {
        hideMessage();
    }
};

const createGraphic = async (request: Pick<IGraphic, 'date' | 'inspection' | 'workshop'>): Promise<IGraphic> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.post(Endpoints.Graphic, request);
    } finally {
        hideMessage();
    }
};

const updateGraphic = async (request: Partial<IGraphic>): Promise<IGraphic> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.patch(`${Endpoints.Graphic}/${request.id}`, request);
    } finally {
        hideMessage();
    }
};

const deleteGraphic = async (id: string): Promise<void> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        await api.delete(`${Endpoints.Graphic}/${id}`);
    } finally {
        hideMessage();
    }
};

export const useGetGraphicsQuery = () =>
    useQuery<IGraphic[]>({
        queryKey: [Endpoints.Graphic],
        queryFn: () => getGraphics(),
        initialData: [],
    });

export const useCreateGraphicQuery = (onSuccess: (data: IGraphic) => void) =>
    useMutation({
        mutationFn: createGraphic,
        onSuccess,
    });

export const useGetGraphicsByDateQuery = (date?: string) =>
    useQuery<IGraphic[]>({
        queryKey: [Endpoints.Graphic, date],
        queryFn: () => getGraphicsByDate(date),
        initialData: [],
    });

export const useDeleteGraphicQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: deleteGraphic,
        onSuccess,
    });

export const useUpdateGraphicQuery = (onSuccess: () => void) =>
    useMutation({
        mutationFn: updateGraphic,
        onSuccess,
    });
