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

export interface IHighDanger {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    workshop: IWorkshop;
    itl: IHighDangerItl[];
    is_deleted: boolean;
}

export interface ICreateHighDanger {
    name: string;
    workshop: string;
}
