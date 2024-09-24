import { Dayjs } from 'dayjs';

export interface ISafetyInfoBody {
    date: string | Dayjs;
    ordinal_number: number;
    reason: string;
    author_signature: boolean;
    employer_signature: boolean;
    personalCard?: string;
}
