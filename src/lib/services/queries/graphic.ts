import { dictionary } from '@/constants';
import { Endpoints } from '@/lib/services';
import { api } from '@/lib/services/api';
import { IActs, IGraphic, IMeasures } from '@/types/graphics.ts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { modal } from '@/app';

const getGraphics = async (userId?: string): Promise<IGraphic[]> => await api.get(Endpoints.Graphic, { params: { userId } });

const getGraphicsByDate = async (date?: string): Promise<IGraphic[]> => await api.get(Endpoints.Graphic, { params: { date } });

const getAllActs = async (graphicId?: string, search?: string): Promise<IActs[]> => (await api.get(`${Endpoints.Acts.toString()}${graphicId ? `?filter.graphic.id=${graphicId}${search ? `&search=${search}` : ''}` : search ? `&search=${search}` : ''}`)).data;

const getMeasures = async (graphicId?: string, search?: string): Promise<IMeasures[]> => (await api.get(`${Endpoints.Measures.toString()}${graphicId ? `?filter.graphic.id=${graphicId}${search ? `&search=${search}` : ''}` : search ? `&search=${search}` : ''}`)).data;

const getReports = async (graphicId?: string, search?: string): Promise<IMeasures[]> => (await api.get(`${Endpoints.Reports.toString()}${graphicId ? `?filter.graphic.id=${graphicId}${search ? `&search=${search}` : ''}` : search ? `&search=${search}` : ''}`)).data;

export const getGraphicById = async (id: string): Promise<IGraphic> => await api.get(`${Endpoints.Graphic}/${id}`);

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

export const useCreateGraphicQuery = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createGraphic,
        onSuccess: () => {
            modal.success({
                title: 'Текширув қўшиш мувафақиятли амалга оширилди!',
            });
            queryClient.invalidateQueries({ queryKey: [Endpoints.Graphic] });
        },
    });
};

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

export const useUpdateGraphicQuery = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateGraphic,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Graphic] });
            modal.success({
                title: 'Текширув янгилаш мувафақиятли амалга оширилди!',
            });
        },
    });
};

export const getActsQuery = (graphicId?: string, search?: string) => {
    return useQuery<IActs[]>({
        queryKey: [Endpoints.Acts, graphicId, search],
        queryFn: () => getAllActs(graphicId, search),
        initialData: [],
        enabled: !!graphicId || !!search,
        refetchOnMount(query) {
            return query.state.data?.length ? false : true;
        },
        refetchOnWindowFocus: false, // don't refetch on window focus
        refetchOnReconnect: false,
    });
};

export const getMeasuresQuery = (graphicId?: string, search?: string) =>
    useQuery<IMeasures[]>({
        queryKey: [Endpoints.Measures, graphicId, search],
        queryFn: () => getMeasures(graphicId, search),
        initialData: [],
        retry: 2,
        refetchOnMount(query) {
            return query.state.data?.length ? false : true;
        },
        refetchOnWindowFocus: false, // don't refetch on window focus
        refetchOnReconnect: false, // refetch on network reconnection
        enabled: !!graphicId || !!search,
    });

export const getReportsQuery = (graphicId?: string, search?: string) =>
    useQuery<IMeasures[]>({
        queryKey: [Endpoints.Reports, graphicId, search],
        queryFn: () => getReports(graphicId, search),
        initialData: [],
        retry: 2,
        refetchOnWindowFocus: false, // don't refetch on window focus
        refetchOnReconnect: true, // refetch on network reconnection
        enabled: !!graphicId || !!search,
        refetchOnMount(query) {
            return query.state.data?.length ? false : true;
        },
    });

export const useGetGraphicByIdQuery = (graphicId: string) =>
    useQuery({
        queryKey: [Endpoints.Graphic, graphicId],
        queryFn: () => getGraphicById(graphicId),
    });
