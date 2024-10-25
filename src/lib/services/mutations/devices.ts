import { IRegisterDevicePayload } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

const registerDevice = async (body: IRegisterDevicePayload) => (await api.post(Endpoints.Devices, body)).data;

export const useRegisterDeviceMotation = () => {
    return useMutation({
        mutationFn: (body: IRegisterDevicePayload) => registerDevice(body),
    });
};
