import { IWorkshop } from './workshop';

export interface IMagazine {
    control_date: string;
    omissions: string;
    measures: string;
    complate_date: string;
    signature: boolean;
    magazine_type: string;
    commissions: string;
    responsibles: string;
    workshop: IWorkshop;
    workshop_branches: WorkshopBranches;
    disadvantages_images: TImages;
    complated_images: null | TImages;
    is_deleted: boolean;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
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

export interface TImages {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    url: string;
    type: string;
}
