import { Dayjs } from 'dayjs';

export interface CreateMagazineBody {
    control_date: string | Dayjs;
    omissions: string;
    measures: string;
    signature: boolean;
    magazine_type?: string;
    complate_date: string | Dayjs;
    commissions: string;
    responsibles: string;
    disadvantages_images: string;
    complated_images?: string;
}
