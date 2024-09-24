import { ICreateHighDanger, ICreateHighDangerItl, IHighDanger, IHighDangerItl } from '@/types/high-dangers.ts';
import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { useMutation } from '@tanstack/react-query';

const createHighDanger = async (data: ICreateHighDanger): Promise<IHighDanger> => api.post(Endpoints.HighDangers, data);

const createHighDangerItl = async (data: ICreateHighDangerItl): Promise<IHighDangerItl> => api.post(Endpoints.Itl, data);

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
