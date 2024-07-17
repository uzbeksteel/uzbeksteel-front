import { Rule } from 'antd/es/form';
import { dictionary } from '../dictionary';

type TFields = {
    name: string;
    label: string;
    rule?: Rule[];
    span?: number;
    isRequired?: boolean;
    isTextArea?: boolean;
    isInputNumber?: boolean;
    options?: { label: string; value: string }[];
};

const labels = dictionary.labels;

export const getFields = (): TFields[] => {
    return [
        {
            label: labels[0],
            name: 'name',
            isRequired: true,
            options: [
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
            ],
        },
        {
            label: labels[1],
            name: 'director',
            isRequired: true,
            options: [
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
            ],
        },
        {
            label: labels[2],
            name: 'director_type',
            isRequired: true,
            options: [
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
            ],
        },
    ];
};
