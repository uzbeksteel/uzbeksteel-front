import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { IAccident, IAccidentAct, ICreateAccident, ICreateAccidentOrder, ICreateAccidentOrderFile } from '@/types/accident.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AccidentStatus } from '@/constants';

const createAccidentAct = async (body: IAccidentAct) => await api.post(Endpoints.CreateAccidentAct, body);
const createAccidentOrder = async (body: ICreateAccidentOrder) => await api.post(Endpoints.CreateAccidentOrder, body);
const createAccidentOrderFile = async (body: ICreateAccidentOrderFile) => await api.post(Endpoints.CreateAccidentOrderFile, body);
const createAccident = async (body: ICreateAccident): Promise<IAccident> => await api.post(Endpoints.Accident, body);
const upateAccidentStatus = async (accidentId: string, status: AccidentStatus): Promise<IAccident> => await api.patch(`${Endpoints.Accident}/${accidentId}`, { status });
export const createAccidentActMutation = () =>
    useMutation({
        mutationFn: (body: IAccidentAct) => createAccidentAct(body),
        onSuccess: () => {
            history.back();
        },
    });

export const createAccidentOrderMutation = () =>
    useMutation({
        mutationFn: (body: ICreateAccidentOrder) => createAccidentOrder(body),
        onSuccess: () => {
            history.back();
        },
    });

export const createAccidentOrderFileMustache = () =>
    useMutation({
        mutationFn: (body: ICreateAccidentOrderFile) => createAccidentOrderFile(body),
        onSuccess: () => {
            history.back();
        },
    });

export const createAccidentMutation = (onSuccess: (data: IAccident) => void) =>
    useMutation({
        mutationFn: createAccident,
        onSuccess,
    });

export const updateAccidentStatusMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { accidentId: string; status: AccidentStatus }) => upateAccidentStatus(data.accidentId, data.status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Accident] });
        },
    });
};
