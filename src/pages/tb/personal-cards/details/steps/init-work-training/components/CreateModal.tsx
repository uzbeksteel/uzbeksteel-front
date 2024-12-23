import { Box, CustomModal, Field, Form, Select } from '@/components';
import { createInitWorkTrainingMutation } from '@/lib/services/mutations/init-work-training';
import { useProgramQuery } from '@/lib/services/queries/program';
import { useAppStore } from '@/store';
import { Checkbox } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useParams } from 'react-router-dom';

interface IValues {
    program: string;
    masterSignature: boolean;
    employeeSignature: boolean;
}

export const CreateModal = () => {
    const { id } = useParams();
    const [form] = useForm();
    const { isModal, setIsModal } = useAppStore();
    const { data, isPending } = useProgramQuery();

    const { mutateAsync, isSuccess } = createInitWorkTrainingMutation(id!);

    const onFinish = (value: IValues) => {
        if (id) {
            mutateAsync({ ...value, personalCard: id });
        }
    };

    if (isSuccess) {
        setIsModal(false);
    }
    return (
        <CustomModal
            open={isModal}
            onCancel={() => {
                setIsModal(false);
            }}
            footer={false}
        >
            <Form onFinish={onFinish} form={form}>
                <Field span={24} name={'program'} label={'Программа'} required>
                    <Select loading={isPending} style={{ borderRadius: '0px', width: '100%' }} placeholder={'Программани киритинг'} options={data?.map((v) => ({ label: v.name, value: v.id }))} />
                </Field>

                <Field span={24} name={'masterSignature'} valuePropName="checked" vertical={false} isRequired={false}>
                    <Box $justify="space-between">
                        <span>Мастер имзоси : </span>
                        <Checkbox />
                    </Box>
                </Field>

                <Field span={24} valuePropName="checked" name={'employeeSignature'} isRequired={false} vertical={false}>
                    <Box $justify="space-between">
                        <span>Ишчи имзоси : </span>
                        <Checkbox />
                    </Box>
                </Field>
            </Form>
        </CustomModal>
    );
};
