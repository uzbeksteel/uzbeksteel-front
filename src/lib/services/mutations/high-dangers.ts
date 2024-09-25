import { ICreateHighDanger, ICreateHighDangerItl, ICreateHighDangerOrder, IHighDanger, IHighDangerItl, IHighDangerOrder } from '@/types/high-dangers.ts';
import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { useMutation } from '@tanstack/react-query';

const createHighDanger = async (data: ICreateHighDanger): Promise<IHighDanger> => api.post(Endpoints.HighDangers, data);

const createHighDangerItl = async (data: ICreateHighDangerItl): Promise<IHighDangerItl> => api.post(Endpoints.Itl, data);

const createHighDangerOrder = async (data: ICreateHighDangerOrder): Promise<IHighDangerOrder> => api.post(Endpoints.HighDangerOrder, data);

export const createHighDangerMutation = (onSuccess: (data: IHighDanger) => void) =>
    useMutation({
        mutationFn: createHighDanger,
        onSuccess,
    });

export const createHighDangerItlMutation = (onSuccess: (data: IHighDangerItl) => void) =>
    useMutation({
        mutationFn: createHighDangerItl,
        onSuccess,
    });

export const createHighDangerOrderMutation = (onSuccess: (data: IHighDangerOrder) => void) =>
    useMutation({
        mutationFn: createHighDangerOrder,
        onSuccess,
    });
