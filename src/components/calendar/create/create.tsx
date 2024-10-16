import { Content } from './content';
import { modalStoreOutside } from '@/store';
import { modalIds } from '@/components/calendar/constants.ts';

export const Create = () => {
    modalStoreOutside.openModal({
        id: modalIds.create,
        content: <Content />,
        title: 'Текширув графиги яратиш',
        footer: null,
    });
};
