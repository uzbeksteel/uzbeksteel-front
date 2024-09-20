import { IPersonalCard } from '@/types/personal-cards';

export interface IEmerganceyBreafing {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    briefing_date: string;
    briefing_name: string;
    master_signature: boolean;
    employer_signature: boolean;
    personalCard: IPersonalCard;
}
