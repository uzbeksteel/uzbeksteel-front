import { modal } from '@/app';
import { dictionary } from '@/constants';
import { Content } from './content';

export const Create = () => {
    modal.confirm({
        title: 'Текширув графиги яратиш',
        content: <Content />,
        icon: null,
        okText: dictionary.save,
        onOk: () => {
            modal.success({
                title: 'Текширув қўшиш мувафақиятли амалга оширилди!',
            });
        },
    });
};
