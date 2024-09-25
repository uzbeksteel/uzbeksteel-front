import { DatePicker, Form as AntdForm, Modal, UploadFile } from 'antd';
import { useQueryClient } from '@tanstack/react-query';
import { createHighDangerOrderMutation, Endpoints, useUploadFileQuery } from '@/lib/services';
import { Dragger, Field, Form } from '@/components';
import { ICreateHighDangerOrder } from '@/types/high-dangers.ts';

interface ContentProps {
    highDangerId: string;
}

export const Content = ({ highDangerId }: ContentProps) => {
    const [form] = AntdForm.useForm<ICreateHighDangerOrder>();
    const { mutateAsync } = useUploadFileQuery(() => {});
    const { mutate } = createHighDangerOrderMutation(onSuccess);
    const queryClient = useQueryClient();
    function onSuccess() {
        Modal.destroyAll();
        queryClient.invalidateQueries({ queryKey: [Endpoints.HighDangers] });
    }

    const onFinish = async ({ upload, ...data }: Omit<ICreateHighDangerOrder, 'high_danger' | 'file'> & { upload: UploadFile[] }) => {
        const formData = new FormData();
        const file = upload[0] as UploadFile;
        if (file.originFileObj) {
            formData.append('file', file.originFileObj);
        }
        const { id } = await mutateAsync(formData);
        mutate({ high_danger: highDangerId, file: id, ...data });
    };
    return (
        <Form form={form} onCancel={onSuccess} onFinish={onFinish}>
            <Field name="number" label="Раками" placeholder="Раками" span={24} required />
            <Field name="date" label="Сана" required span={24}>
                <DatePicker style={{ borderRadius: 0, width: '100%' }} placeholder="Сана" />
            </Field>
            <Field label="Файл" name="upload" valuePropName="fileList" getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)} span={24}>
                <Dragger beforeUpload={() => false} maxCount={1} />
            </Field>
        </Form>
    );
};
