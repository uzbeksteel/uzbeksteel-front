export interface IAccidentAct {
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
}

export interface ICreateAccidentOrderFile extends IAccidentOrderFile {
    fileId: string;
    accidentId: string;
}
