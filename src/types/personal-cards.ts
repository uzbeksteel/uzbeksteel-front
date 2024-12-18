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

export interface IOrder {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    order_number: number;
    date: string;
    fullName: string;
    start_date_of_internship: string;
    internship_duration: number;
    position_of_attached_person: string;
    name_of_attached_person: string;
    author_of_intership: string;
    workshop_director_signature: boolean;
    master_signature: boolean;
    teacher_signature: boolean;
    employer_signature: boolean;
    workshop: IWorkshop;
    personalCard: IPersonalCard;
    profession: IProfession;
}

export interface IFiles {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    url: string;
    type: string;
}

export type TCreateMedicalPayload = {
    mediacalExamName: string;
    mediacalExamDate: string | Dayjs;
    authorSignature: boolean;
    personalCard: string;
};

export interface Iprofession {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    description: string;
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
export interface IWorkPermission {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    order_number: string;
    fullName: string;
    status: string;
    permission_work_date: string;
    workshop_director_signature: boolean;
    master_signature: boolean;
    inpector_signature: boolean;
    teacher_signature: boolean;
    personalCard: IPersonalCard;
}

export interface ISafetyInfo {
    date: string;
    ordinal_number: number;
    reason: string;
    author_signature: boolean;
    employer_signature: boolean;
    personalCard: IPersonalCard;
}

export interface IRepatBriefing {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    briefing_date: string;
    briefing_name: string;
    master_signature: boolean;
    employer_signature: boolean;
    personalCard: IPersonalCard;
}

export interface ISafetyNotes {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    date: string;
    briefing: IBriefing;
    employer_signature: boolean;
    personalCard: IPersonalCard;
}
