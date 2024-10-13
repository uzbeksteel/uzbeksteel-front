import { GraphicStatus } from '@/constants';

export const graphicsDictionary = {
    labels: ['Номи', 'Сех', 'Файл'],
    status: {
        [GraphicStatus.PENDING]: 'Кутилмоқда',
        [GraphicStatus.CHECKED]: 'Текширилди',
        [GraphicStatus.COMPLETED]: 'Бажарилди',
    },
};
