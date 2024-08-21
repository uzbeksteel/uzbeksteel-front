export interface IDocuments {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    name: string;
    year: string;
    devision: string;
    storage_space: string;
    is_deleted: boolean;
}

export type IDocumentPayload = {
    name: string;
    year: string;
    devision: string;
    storage_space: string;
};
