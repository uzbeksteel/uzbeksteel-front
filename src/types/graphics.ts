import { Dayjs } from 'dayjs';

export interface IGraphic {
    id: string;
    date: Dayjs;
    workshop: string;
    inspection: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
