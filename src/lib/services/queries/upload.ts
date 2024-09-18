import { message } from '@/app';
import { API_URL, dictionary } from '@/constants';
import { TUploadFileResponse } from '@/types/app';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { api } from '../api';
import { Endpoints } from './endpoints';

const uploadFile = async (body: FormData): Promise<TUploadFileResponse> => {
    const hideMessage = message.loading(dictionary.loading, 0);

    try {
        return await api.post(`files/${Endpoints.Upload}`, body);
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

export const downloadFile = async (id: string | number): Promise<AxiosResponse> => {
    return await axios.get(`${API_URL}${Endpoints.Files}/${id}/${Endpoints.Download}`, { responseType: 'blob' });
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
