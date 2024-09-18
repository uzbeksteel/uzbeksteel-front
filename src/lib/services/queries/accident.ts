import { IAccident } from '@/types/accident.ts';
import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { AccidentStatus } from '@/constants';
import { useQuery } from '@tanstack/react-query';

const findAccidents = async (workshopId: string, status: AccidentStatus): Promise<IAccident[]> => api.get(`${Endpoints.Accident}/${workshopId}`, { params: { status } });
const findAccidentById = async (accidentId: string): Promise<IAccident> => api.get(`${Endpoints.AccidentById}/${accidentId}`);

export const getAccidentsQuery = (workshopId: string, status: AccidentStatus) =>
    useQuery({
        queryKey: [Endpoints.Accident, workshopId, status],
        queryFn: () => findAccidents(workshopId, status),
        initialData: [],
        enabled: !!workshopId,
    });

export const getAccidentByIdQuery = (accidentId: string) =>
    useQuery({
        queryKey: [Endpoints.AccidentById, accidentId],
        queryFn: () => findAccidentById(accidentId),
        enabled: !!accidentId,
    });
