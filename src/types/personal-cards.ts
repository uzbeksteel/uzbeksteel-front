import { Dayjs } from 'dayjs';
import { IFile } from './graphics';
import { IProfession } from './profession';
import { IUsers, IWorkshop } from './workshop';

export interface IPersonalCard {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    date_of_entry_to_work: string;
    files: IFile;
    user: IUsers;
    workshop: IWorkshop;
    profession: IProfession;
    introductoryBriefing: any;
    education?: string;
}

export type IPersonalCardPayload = {
    tabNumber: number;
    workShopId: string;
    professionId: string;
    education: string;
    date_of_entry_to_work: string | Dayjs;
    fileId: string;
};

export interface IIntroBriefing {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    fullName: string;
    dateTime: string;
    personalCard: IPersonalCard;
}

export interface IWorkInitTraining {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    master_signature: boolean;
    employee_signature: boolean;
    personalCard: IPersonalCard;
    program: IProgram;
}

export interface IProgram {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    briefings: IBriefing[];
}

export interface IBriefing {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    fullname: string;
    duration: number;
    number: string;
    description: string;
}
