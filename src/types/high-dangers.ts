import { IWorkshop } from '@/types/workshop.ts';
import { IFiles } from '@/types/personal-cards.ts';

export interface IHighDangerItl {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    itl_number: number;
    file?: IFiles;
    is_deleted: boolean;
}

export interface IHighDangerOrder {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    number: string;
    date: Date;
    file: IFiles;
}

export interface IHighDanger {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    workshop: IWorkshop;
    itl: IHighDangerItl[];
    order: IHighDangerOrder[];
    is_deleted: boolean;
}

export interface ICreateHighDanger {
    name: string;
    workshop: string;
}

export interface ICreateHighDangerItl {
    date: string;
    itl_number: string;
    high_danger: string;
    file: string;
}

export interface ICreateHighDangerOrder {
    date: string;
    number: string;
    high_danger: string;
    file: string;
}
