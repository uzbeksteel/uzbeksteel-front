import { IWorkshop } from '@/types/workshop.ts';

export interface IDanger {
    id?: string;
    profession: string;
    typeActivity: string;
    typeDescriptionOfHazard: string;
    riskAssociatedWithDanger: string;
    probability: string;
    seriousness: string;
    riskLevel: string;
    controlMethods: string;
    workshop: IWorkshop;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}
