import { IWorkshop } from '@/types/workshop.ts';

export interface IDanger {
    id?: string;
    profession: string;
    typeActivity: string;
    typeDescriptionOfHazard: string;
    riskAssociatedWithDanger: string;
    riskLevel?: string;
    riskScore?: number;
    controlMethods: string;
    importance: number;
    isStaffQualified: boolean;
    areToolsCompliant: boolean;
    isDocumentationMethodAvailable: boolean;
    areKPIsMeasured: boolean;
    areEnvironmentalStandardsMet: boolean;
    workshop: IWorkshop;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}
