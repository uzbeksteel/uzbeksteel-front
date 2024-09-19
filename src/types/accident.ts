import { AccidentStatus } from '@/constants';
import { IWorkshop } from '@/types/workshop.ts';
import { IFile } from '@/types/graphics.ts';

export interface IAccidentAct {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    accidentPlace: string;
    fullName: string;
    gender: string;
    age: number;
    profession: string;
    rank: string;
    seniority: number;
    entryInstructionDate: Date;
    laborProtectionStudiedDate: Date;
    initialInstructionDate: Date;
    medicalExaminationDate: Date;
    departmentHighRiskInspection: string;
    accidentDate: Date;
    timeUntilAccident: string;
    accidentSituation: string;
    accidentReason: string;
    causalTool: string;
    victimVigilance: string;
    diagnosis: string;
    guiltyFullName: string;
    violatedRule: string;
    commissionProposal: string;
    witnesses: string;
    accidentId: string;
}

export interface IAccidentOrder {
    orderShape: string;
    orderQuantity: string;
    orderDescription: string;
    notes: string;
    subscriberName: string;
    subscriberPosition: string;
    commissionRole: string;
    date: Date;
    boardChairman: boolean;
    legalDepartmentDirector: boolean;
    industrialSafetyDirector: boolean;
}

export interface ICreateAccidentOrder extends IAccidentOrder {
    userId: string;
    professionId: string;
    accidentId: string;
}

export interface IAccidentOrderFile {
    name: string;
    date: Date;
    file: IFile;
}

export interface ICreateAccidentOrderFile extends IAccidentOrderFile {
    fileId: string;
    accidentId: string;
}

export interface IAccident {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    status: AccidentStatus;
    workshop: IWorkshop;
    order?: IAccidentOrder;
    orderFile?: IAccidentOrderFile;
    acts: IAccidentAct[];
}

export interface ICreateAccident {
    workshopId: string;
    accidentDate: Date;
    victimsNumber: number;
}
