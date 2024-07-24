import { UserRoles, UserTypes } from '@/constants';

export interface TUser {
    id: string;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
    password: string;
    tab_number: string;
    position: string;
    birth_date: string;
    place_of_birth: string;
    nationality: string;
    phone: string;
    role: UserRoles;
    user_type: UserTypes;
    workshop: Workshop;
    workShopBranches: WorkShopBranches;
}

export interface Workshop {
    id: string;
    created_at: string;
    updated_at: string;
}

export interface WorkShopBranches {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    ref_key: string;
    code: string;
    masters: string[];
}

export type User1CType = {
    ishchi: string;
    tabNomer: string;
    bolinma: string;
    lavozim: string;
    ishchiTuri: string;
    kategoriya: string;
    tugilganSana: string;
    inn: string;
    jinsi: string;
    tugilganJoyi: string;
    inps: string;
    millati: string;
    telefon: string;
    passportSeriya: string;
    passportNomer: string;
    berilganVaqti: string;
    kimTomonidanBerilgan: string;
    amalQilishMuddati: string;
    rasm: any;
    contacts: any;
    talim: any;
};

export interface CreateUserBody {
    first_name: string;
    last_name?: string;
    password: string;
    tab_number: string;
    position: string;
    birth_date: string;
    place_of_birth: string;
    nationality?: string;
    phone: string;
    role?: string;
    user_type?: string;
}
