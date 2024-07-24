import { modal } from '@/app';
import { dictionary } from '@/constants';
import { Content } from './content';
import { useGraphicStore } from '@/store';

export const Create = () => {
    modal.confirm({
        title: 'Текширув графиги яратиш',
        content: <Content />,
        icon: null,
        okText: dictionary.save,
        okButtonProps: { style: { borderRadius: 0 } },
        cancelButtonProps: { style: { borderRadius: 0 } },
        onOk: async () => {
            await useGraphicStore.getState().createFormInstance?.validateFields();
            useGraphicStore.getState().createFormInstance?.submit();
        },
    });
};
