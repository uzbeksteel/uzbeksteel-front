import { Dayjs } from 'dayjs';

export interface ISafetyInfoBody {
    date: string | Dayjs;
    ordinal_number: number;
    reason: string;
    author_signature: boolean;
    employer_signature: boolean;
    personalCard?: string;
}

export interface IRepeatBriefingBody {
    briefingDate: string | Dayjs;
    briefingName: string;
    master_signature: boolean;
    employer_signature: boolean;
    personalCard?: string;
}
