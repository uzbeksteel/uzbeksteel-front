import { dictionary } from '@/constants';
import { Rule } from 'antd/es/form';

export const stringValidation: Rule[] = [
    {
        type: 'string',
        min: 1,
        message: dictionary.messages[1],
    },
];

export const urlValidation: Rule[] = [
    {
        type: 'url',
        warningOnly: true,
        message: dictionary.messages[2],
    },
    ...stringValidation,
];
