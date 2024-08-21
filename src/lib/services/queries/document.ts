import { Endpoints } from '@/lib/services';
import { api } from '@/lib/services/api';
import { IDocuments } from '@/types/documents';
import { useQuery } from '@tanstack/react-query';

const findAllDocuments = async (): Promise<IDocuments[]> => {
    const responce = await api.get(Endpoints.Documents);
    return responce.data;
};

const findOneDocument = async (id: string): Promise<IDocuments> => {
    const responce: IDocuments = await api.get(`${Endpoints.Documents}/${id}`);
    return responce;
};

export const useDocumentsQuery = () =>
    useQuery<IDocuments[]>({
        queryKey: [Endpoints.Documents],
        queryFn: findAllDocuments,
    });

export const useDocumentQuery = (id: string) =>
    useQuery<IDocuments>({
        queryKey: [Endpoints.Documents, id],
        queryFn: () => findOneDocument(id),
        enabled: !!id,
    });
