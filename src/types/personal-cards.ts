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

export interface IPersonalCardMedical {
    mediacal_exam_name: string;
    mediacal_exam_date: string;
    author_signature: boolean;
    personalCard: IPersonalCard;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
}

export type TCreateMedicalPayload = {
    mediacalExamName: string;
    mediacalExamDate: string | Dayjs;
    authorSignature: boolean;
    personalCard: string;
};
