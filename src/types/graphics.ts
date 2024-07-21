import { Dayjs } from 'dayjs';
import { IWorkshop } from '@/types/workshop.ts';

export interface IGraphic {
    id: string;
    date: Dayjs;
    workshop: IWorkshop;
    inspection: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
