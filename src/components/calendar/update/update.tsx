import { modal } from '@/app';
import { dictionary } from '@/constants';
import { Content } from './content';
import { useGraphicStore } from '@/store';

export const Update = () => {
    modal.confirm({
        title: 'Текширув графигини ўзгартириш',
        content: <Content />,
        icon: null,
        okText: dictionary.save,
        onOk: async () => {
            await useGraphicStore.getState().updateFormInstance?.validateFields();
            useGraphicStore.getState().updateFormInstance?.submit();
        },
    });
};
