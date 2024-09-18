import { UploadFile } from 'antd';
import { Action, Location } from 'history';

export interface IAppStore {
    theme: ETheme;
    search: string;
    action: Action;
    isModal: boolean;
    isDrawer: boolean;
    imageId: number;
    fileList: UploadFile[];
    location: Location;
    collapsed: boolean;
    previewImage: string;
    previewTitle: string;

    setTheme: (theme: ETheme) => void;
    setSearch: (search: string) => void;
    setHistory: ({ action, location }: THistory) => void;
    setImageId: (imageId: number) => void;
    setIsModal: (isModal: boolean) => void;
    setIsDrawer: (isDrawer: boolean) => void;
    setFileList: (fileList: UploadFile[]) => void;
    setCollapsed: (collapsed: boolean) => void;
    setPreviewImage: (image: string) => void;
    setPreviewTitle: (title: string) => void;
}

type THistory = {
    action: Action;
    location: Location;
};

export enum ETheme {
    LIGHT = 'light',
    DARK = 'dark',
    SYSTEM = 'system',
}

export type TUploadFileResponse = {
    images: string[];
    id: number;
    createdAt: string;
};

export type TData = {
    ru: string;
    uz: string;
};

export type TImage = {
    id: number;
    createdAt: string;
    images: string[];
};

export interface IImage {
    link: string;
    images: TImage;
    id: number;
    createdAt: string;
}

export type TImageBody = {
    link: string;
    image_id: number;
};

export type TParams = number | string | undefined | any;

export interface IResponse<T> {
    data: T;
    meta: {
        itemsPerPage: number;
        totalItems: number;
        currentPage: number;
        totalPages: number;
        sortBy: string[][];
    };
}
