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
    workshopId: string;
    graphicId: string;
    file: string;
}

export interface IFile {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    url: string;
    type: string;
}

export interface IActs {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    status: string;
    file: IFile;
    workshop: Workshop;
}

export interface Workshop {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    ref_key: string;
}

export interface IMeasures {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    status: string;
    file: IFile;
    graphic: IGraphic;
    workshop: Workshop;
}
