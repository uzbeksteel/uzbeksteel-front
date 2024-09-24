import { Dayjs } from 'dayjs';

export interface IWorkPermissionBody {
    order_number: string;
    fullName: string;
    status: string;
    permission_work_date: string | Dayjs;
    workshop_director_signature: boolean;
    master_signature: boolean;
    inpector_signature: boolean;
    teacher_signature: boolean;
    personalCard: string;
}
