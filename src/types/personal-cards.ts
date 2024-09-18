import { IFile } from './graphics';
import { IUsers, IWorkshop } from './workshop';

export interface IPersonalCard {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    date_of_entry_to_work: string;
    files: IFile;
    user: IUsers;
    workshop: IWorkshop;
    introductoryBriefing: any;
}

export type IPersonalCardPayload = {
    tabNumber: number;
    workShopId: string;
    date_of_entry_to_work: string;
    fileId: string;
};
