import { message } from '@/app';
import { makeErrMsg } from './general';

export const addMessage = (data: any): void => {
    message.open({
        type: 'error',
        content: makeErrMsg(data),
    });
};
