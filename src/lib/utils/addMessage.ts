import { message } from '@/app';
import { makeErrMsg } from './general';

export const addMessage = (data: any): void => {
    message.open({
        type: 'error',
        content: makeErrMsg(data),
    });
};

export const errorMessage = (data: any): void => {
    message.open({
        type: 'error',
        content: data,
    });
};

export const successMessage = (data: any): void => {
    message.open({
        type: 'success',
        content: data,
    });
};
