import { IMAGE_URL } from '@/constants';
import { RcFile } from 'antd/es/upload';
import dayjs from 'dayjs';

export const LANG = 'lang';
export const TOKEN = 'token';
export const THEME = 'theme';
export const COLLAPSED = 'collapsed';
export const CATEGORY_ID = 'category_id';
export const SUB_CATEGORY_ID = 'sub_category_id';

export const USER = 'user';

const PREFIX = '/';

export const getRoute = (...routes: Array<string>) => {
    let route = '';

    for (let i = 0; i < routes.length; i++) {
        if (routes[i].startsWith('/')) {
            route += routes[i];
        } else {
            route += `/${routes[i]}`;
        }
    }

    return route;
};

export const getPrefix = (name: string, action: string) => `${name}${PREFIX}${action}`;

export const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export const getFormData = (values: any) => {
    const formData = new FormData();

    for (const key in values) {
        formData.append(key, values[key]);
    }

    return formData;
};

export const makeErrMsg = (error: any | string): string => {
    if (typeof error === 'string') {
        return error;
    }

    if (!error.response?.data) {
        return error.message;
    }

    const { error: responseError } = error.response.data;

    if (responseError.errMsg instanceof Array) {
        return responseError.errMsg[0];
    }

    return responseError.errMsg;
};

export const dateFormatter = (date: string): string => dayjs(date).format('MM-DD-YYYY');

export const getImgUrl = (url: string) => `${IMAGE_URL}${url}`;
