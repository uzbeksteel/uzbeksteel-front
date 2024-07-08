import { IGraphic } from '@/types/graphics.ts';
import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { message } from 'antd';
import { dictionary } from '@/constants';
import { useQuery } from '@tanstack/react-query';

const getGraphics = async (): Promise<IGraphic[]> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.get(Endpoints.Graphic);
    } finally {
        hideMessage();
    }
};

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

const updateGraphic = async (id: string, request: Partial<IGraphic>): Promise<IGraphic> => {
    const hideMessage = message.loading(dictionary.loading, 0);
    try {
        return await api.patch(`${Endpoints.Graphic}/${id}`, request);
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
