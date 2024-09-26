import { IUsers, IWorkshop } from '@/types/workshop.ts';
import { IFiles } from '@/types/personal-cards.ts';
import { IProfession } from '@/types/profession.ts';

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

export interface IHighDangerLicence {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    masterFullName: string;
    workPlace: string;
    objectName: string;
    workDescription: string;
    shouldBeStopped?: string;
    shouldBeDiscontinued?: string;
    shouldBeInstalled?: string;
    airSampling?: string;
    shouldBeBlocked?: string;
    heightSafetyMeasures?: string;
    warning?: string;
    insulationSafetyMeasures?: string;
    workplaceLayouts?: string;
    additionalMeasures?: string;
    masterPosition: IProfession;
    employer: IUsers;
    employerPosition: IProfession;
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
    licence: IHighDangerLicence[];
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

export interface ICreateHighDangerLicence extends Omit<IHighDangerLicence, 'id' | 'created_at' | 'deleted_at' | 'updated_at' | 'employer' | 'masterPosition' | 'employerPosition'> {
    dangerId: string;
    masterPositionId: string;
    employerPositionId: string;
    employerId: string;
}
