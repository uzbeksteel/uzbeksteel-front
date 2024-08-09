import { successMessage } from '@/lib/utils';
import { ICreateActPayload, IMeasures } from '@/types/graphics';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

const createAct = async (body: ICreateActPayload): Promise<any> => api.post(Endpoints.Acts, body);

const createMeasures = async (body: ICreateActPayload): Promise<IMeasures> => api.post(Endpoints.Measures, body);

const createReports = async (body: ICreateActPayload): Promise<IMeasures> => api.post(Endpoints.Reports, body);

export const useActMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ICreateActPayload) => createAct(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Workshop] });
            successMessage('Далолатнома яратилди!');
            history.back();
        },
    });
};

export const useMeasuresMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ICreateActPayload) => createMeasures(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Measures] });
            successMessage('Чора-тадбир яратилди!');
            history.back();
        },
    });
};

export const useReportsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: ICreateActPayload) => createReports(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Measures] });
            successMessage('Хисобот яратилди!');
            history.back();
        },
    });
};
