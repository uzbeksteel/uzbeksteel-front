import { successMessage } from '@/lib/utils';
import { IDocumentPayload } from '@/types/documents';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '..';
import { api } from '../api';

const createDocument = async (body: IDocumentPayload) => {
    const responce = await api.post(Endpoints.Documents, body);
    return responce.data;
};

const updateDocument = async (id: string, body: IDocumentPayload) => {
    const responce = await api.patch(`${Endpoints.Documents}/${id}`, body);
    return responce.data;
};

export const createDocumentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IDocumentPayload) => createDocument(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Documents] });
            successMessage('Документ муаффақиятли қўшилди!');
            history.back();
        },
    });
};

export const updateDocumentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, body }: any) => updateDocument(id, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Documents] });
            successMessage('Документ муаффақиятли янгиланди!');
            history.back();
        },
    });
};
