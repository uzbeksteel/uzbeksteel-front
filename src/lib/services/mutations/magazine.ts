import { successMessage } from '@/lib/utils';
import { CreateMagazineBody } from '@/pages/workshop/inspections/create/type';
import { IMagazine } from '@/types/magazine';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from '../queries';

const cerateMagazine = async (body: CreateMagazineBody): Promise<CreateMagazineBody> => api.post(Endpoints.Magazine, body);
const signatureMagazine = async (id: string): Promise<IMagazine> => api.patch(`${Endpoints.SignatureMagazine}/${id}`);
const updateMagazine = async (id: string, body: Partial<CreateMagazineBody>): Promise<CreateMagazineBody> => api.patch(`${Endpoints.Magazine}/${id}`, body);

export const createMagazineMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: CreateMagazineBody) => cerateMagazine(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Magazine] });
            successMessage('Текширув яратилди!');
            history.back();
        },
    });
};

export const updateMagazineMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: Partial<CreateMagazineBody>) => updateMagazine(id, body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Magazine] });
            successMessage('Tekshiruv yangilandi!');
            history.back();
        },
    });
};

export const signatureMagazineMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => signatureMagazine(id),
        onSuccess: (data, variables, type) => {
            queryClient.invalidateQueries({ queryKey: [Endpoints.Magazine] });

            queryClient.setQueryData([Endpoints.Magazine, type], (oldData: any) => {
                if (!oldData) return oldData;

                return {
                    ...oldData,
                    data: oldData.data.map((magazine: IMagazine) => (magazine.id === variables ? { ...magazine, ...data } : magazine)),
                };
            });
            successMessage('Муоффақиятли тасдиқланди!');
        },
    });
};
