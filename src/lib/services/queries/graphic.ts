import { dictionary } from '@/constants';
import { Endpoints } from '@/lib/services';
import { api } from '@/lib/services/api';
import { IActs, IGraphic } from '@/types/graphics.ts';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';

const getGraphics = async (userId?: string): Promise<IGraphic[]> => await api.get(Endpoints.Graphic, { params: { userId } });

const getGraphicsByDate = async (date?: string): Promise<IGraphic[]> => await api.get(Endpoints.Graphic, { params: { date } });

const getAllActs = async (): Promise<IActs[]> => (await api.get(Endpoints.Acts)).data;

export const getGraphicById = async (id: string): Promise<IGraphic> => {
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

export const useGetGraphicsQuery = (userId?: string) =>
    useQuery<IGraphic[]>({
        queryKey: [Endpoints.Graphic, userId],
        queryFn: () => getGraphics(userId),
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

export const getActsQuery = () =>
    useQuery<IActs[]>({
        queryKey: [Endpoints.Acts],
        queryFn: getAllActs,
        initialData: [],
    });
