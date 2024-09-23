export interface IProgram {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    briefings: IBriefing[];
}

export interface IBriefing {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    fullname: string;
    duration: number;
    number: string;
    description: string;
}
