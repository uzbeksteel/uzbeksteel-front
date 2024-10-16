import { Content } from './content';
import { modalStoreOutside } from '@/store';
import { modalIds } from '@/components/calendar/constants.ts';

export const Update = () => {
    modalStoreOutside.openModal({
        id: modalIds.update,
        content: <Content />,
        title: 'Текширув графигини ўзгартириш',
        footer: null,
    });
};
