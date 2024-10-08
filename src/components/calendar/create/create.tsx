import { modal } from '@/app';
import { Content } from './content';

export const Create = () => {
    modal.confirm({
        title: 'Текширув графиги яратиш',
        content: <Content />,
        icon: null,
        footer: null,
    });
};
