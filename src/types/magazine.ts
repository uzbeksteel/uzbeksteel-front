import { TUser } from './users';
import { IWorkshop } from './workshop';

export interface IMagazine {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    control_date: string;
    omissions: string;
    measures: string;
    complate_date: string;
    signature: boolean;
    magazine_type: string;
    is_deleted: boolean;
    workshop: IWorkshop;
    workshop_branches: WorkshopBranches;
    commissions: TUser[];
    responsibles: TUser[];
}

export interface WorkshopBranches {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    ref_key: string;
    code: string;
}
