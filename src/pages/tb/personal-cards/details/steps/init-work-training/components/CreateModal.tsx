import { CustomModal, Field, Form, Select } from '@/components';
import { useAppStore } from '@/store';
import { Checkbox } from 'antd';

export const CreateModal = () => {
    const { isModal, setIsModal } = useAppStore();
    return (
        <CustomModal
            open={isModal}
            onCancel={() => {
                setIsModal(false);
            }}
            footer={false}
        >
            <Form>
                <Field span={24} name={'program'} label={'Программа'} required>
                    <Select style={{ borderRadius: '0px', width: '100%' }} placeholder={'Программани киритинг'} options={[]}></Select>
                </Field>

                <Field span={24} name={'signarure'} vertical={false} required={false}>
                    <span>Мастер имзоси : </span> <Checkbox />
                </Field>

                <Field span={24} name={'signarure'} vertical={false} required={false}>
                    <span>Ишчи имзоси : </span> <Checkbox />
                </Field>
            </Form>
        </CustomModal>
    );
};
