export interface IProfession {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    description: string;
}

export interface IProfessionPayload {
    name: string;
    description: string;
}
