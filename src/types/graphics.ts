import { IWorkshop } from '@/types/workshop.ts';
import { Dayjs } from 'dayjs';

export interface IGraphic {
    id: string;
    date: Dayjs;
    workshop: IWorkshop;
    inspection: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

export interface ICreateActPayload {
    name: string;
    workShopId: string;
    file: string;
}

export interface IActs {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    status: string;
    file: File;
    workshop: Workshop;
}

export interface File {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    url: string;
    type: string;
}

export interface Workshop {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    ref_key: string;
}
