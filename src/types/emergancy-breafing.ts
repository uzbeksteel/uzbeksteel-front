import { IPersonalCard } from '@/types/personal-cards';
import { IBriefing } from './program';

export interface IEmerganceyBreafing {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    briefing_date: string;
    briefings: IBriefing[];
    master_signature: boolean;
    employer_signature: boolean;
    personalCard: IPersonalCard;
}
