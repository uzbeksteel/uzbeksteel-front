import { UploadFile } from 'antd';
import { Action, Location } from 'history';

export interface IAppStore {
    search: string;
    action: Action;
    isModal: boolean;
    isDrawer: boolean;
    imageId: string;
    fileList: UploadFile[];
    extraFileList: UploadFile[];
    location: Location;
    collapsed: boolean;
    previewImage: string;
    previewTitle: string;
    extraImageId: string;

    setSearch: (search: string) => void;
    setHistory: ({ action, location }: THistory) => void;
    setImageId: (imageId: string) => void;
    setExtraImageId: (extraImageId: string) => void;
    setIsModal: (isModal: boolean) => void;
    setIsDrawer: (isDrawer: boolean) => void;
    setFileList: (fileList: UploadFile[]) => void;
    setExtraFileList: (fextraFileList: UploadFile[]) => void;
    setCollapsed: (collapsed: boolean) => void;
    setPreviewImage: (image: string) => void;
    setPreviewTitle: (title: string) => void;
}

type THistory = {
    action: Action;
    location: Location;
};

export type TUploadFileResponse = {
    images: string[];
    id: string;
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
