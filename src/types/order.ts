import { Dayjs } from 'dayjs';

export interface IOrderBody {
    order_number: number;
    date: string | Dayjs;
    fullName: string;
    profession: string;
    start_date_of_internship: string | Dayjs;
    internship_duration: number;
    position_of_attached_person: string;
    name_of_attached_person: string;
    author_of_intership: string;
    workshop_director_signature: boolean;
    master_signature: boolean;
    teacher_signature: boolean;
    employer_signature: boolean;
    workshop: string;
    personalCard?: string;
}
