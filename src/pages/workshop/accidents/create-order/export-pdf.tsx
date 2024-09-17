import { useSearchParams } from 'react-router-dom';
import { DatePicker, Form as AntdForm, UploadFile } from 'antd';
import { Dragger, Field, Form } from '@/components';
import { ICreateAccidentOrderFile } from '@/types/accident.ts';
import { createAccidentOrderFileMustache, useUploadFileQuery } from '@/lib/services';

export const ExportPdf = () => {
    const [form] = AntdForm.useForm<ICreateAccidentOrderFile>();
    const { mutateAsync } = useUploadFileQuery(() => {});
    const { mutate } = createAccidentOrderFileMustache();
    const [searchParams] = useSearchParams();
    const accidentId = searchParams.get('accidentId') || '';

    const onFinish = async ({ upload, ...data }: Omit<ICreateAccidentOrderFile, 'accidentId' | 'fileId'> & { upload: UploadFile[] }) => {
        const formData = new FormData();
        const file = upload[0] as UploadFile;
        if (file.originFileObj) {
            formData.append('file', file.originFileObj);
        }
        const { id: fileId } = await mutateAsync(formData);
        mutate({ ...data, accidentId, fileId: String(fileId) });
    };
    return (
        <Form form={form} onFinish={onFinish}>
            <Field name="name" label="Номи" placeholder="Номи" span={24} required />
            <Field name="date" label="Сана" span={24} required>
                <DatePicker placeholder="Сана" style={{ borderRadius: '0', width: '100%' }} />
            </Field>
            <Field label="Файл" name="upload" valuePropName="fileList" getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)} span={24}>
                <Dragger beforeUpload={() => false} maxCount={1} />
            </Field>
        </Form>
    );
};
