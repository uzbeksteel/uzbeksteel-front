export interface CreateMagazineBody {
    control_date: string;
    omissions: string;
    measures: string;
    signature: boolean;
    magazine_type?: string;
    complate_date: string;
    commissions: string[];
    responsibles: string[];
}
