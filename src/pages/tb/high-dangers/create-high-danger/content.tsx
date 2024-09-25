import { Form as AntdForm, Modal } from 'antd';
import { Field, Form } from '@/components';
import { createHighDangerMutation, Endpoints } from '@/lib/services';
import { useQueryClient } from '@tanstack/react-query';

interface ContentProps {
    workshopId: string;
}

export const Content = ({ workshopId }: ContentProps) => {
    const [form] = AntdForm.useForm<{ name: string }>();
    const { mutate } = createHighDangerMutation(onSuccess);
    const queryClient = useQueryClient();
    function onSuccess() {
        Modal.destroyAll();
        queryClient.invalidateQueries({ queryKey: [Endpoints.HighDangers] });
    }

    const onFinish = (data: { name: string }) => {
        mutate({ name: data.name, workshop: workshopId });
    };
    return (
        <Form form={form} onCancel={onSuccess} onFinish={onFinish}>
            <Field name="name" label="Иш номи" placeholder="Иш номи" span={24} required />
        </Form>
    );
};
