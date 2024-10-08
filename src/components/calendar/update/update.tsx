import { modal } from '@/app';
import { Content } from './content';

export const Update = () => {
    modal.confirm({
        title: 'Текширув графигини ўзгартириш',
        content: <Content />,
        icon: null,
        footer: null,
    });
};
