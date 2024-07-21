import { TUser } from './users';

export interface IMainWorkshops {
    Ref_Key: string;
    Description: string;
    НаименованиеПолное: string;
    Code: string;
}
export interface IWorkshop {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    ref_key: string;
    workshop_director: TUser;
}

export interface IWorkShopEmployes {
    ishchi: string;
    tabNomer: string;
    bolinma: string;
    lavozim: string;
    tugilganSana: string;
    tugilganJoyi: string;
    inn: string;
    inps: string;
    millati: string;
    telefon: string;
}

export interface CreateWorkShopBody {
    name: string;
    ref_key: string;
    workshop_director: string;
}

export interface IMasters {
    created_at: string;
    updated_at: string;
    deleted_at: any;
    first_name: string;
    last_name: string;
    password: string;
    tab_number: string;
    position: string;
    birth_date: string;
    place_of_birth: string;
    nationality: string;
    phone: string;
    role: string;
    user_type: string;
}

export interface IBranches {
    Ref_Key: string;
    Description: string;
    НаименованиеПолное: string;
    Code: string;
}
