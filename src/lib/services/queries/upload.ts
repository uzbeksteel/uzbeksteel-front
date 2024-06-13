import { message } from '@/app';
import { dictionary } from '@/constants';
import { TUploadFileResponse } from '@/types/app';
import { useMutation } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const uploadFile = async (body: FormData): Promise<TUploadFileResponse> => {
    const hideMessage = message.loading(dictionary.loading, 0);

    try {
        return await api.post(`${Endpoints.Upload}file`, body);
    } finally {
        hideMessage();
    }
};

const deleteFile = async (id: string): Promise<TUploadFileResponse> => {
    const hideMessage = message.loading(dictionary.loading, 0);

    try {
        return await api.delete(`${Endpoints.Upload}${id}`);
    } finally {
        hideMessage();
    }
};

export const useUploadFileQuery = (onSuccess: (data: TUploadFileResponse) => void) =>
    useMutation({
        mutationFn: uploadFile,
        onSuccess,
    });

export const useDeleteFileQuery = (onSuccess: (data: TUploadFileResponse) => void) =>
    useMutation({
        mutationFn: deleteFile,
        onSuccess,
    });
