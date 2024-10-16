import { Field, Form } from '@/components';
import { DatePicker, Form as AntdForm, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useCreateGraphicQuery } from '@/lib/services/queries/graphic.ts';
import { getAllWorkshopsQuery } from '@/lib/services';
import { useModalStore } from '@/store';
import { modalIds } from '@/components/calendar/constants.ts';

export const Content = () => {
    const [form] = AntdForm.useForm();
    const { mutate } = useCreateGraphicQuery();
    const { data: workshops } = getAllWorkshopsQuery();
    const { closeModal } = useModalStore();

    return (
        <Form onCancel={() => closeModal(modalIds.create)} layout="vertical" form={form} onFinish={(data) => mutate(data)} requiredMark>
            <Field span={24} name="date" label="Сана" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <DatePicker style={{ borderRadius: 0, width: '100%' }} />
            </Field>
            <Field label="Цех" span={24} name="workshop" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <Select>
                    {workshops.map((workshop) => (
                        <Select.Option key={workshop.id} value={workshop.ref_key}>
                            {workshop.name}
                        </Select.Option>
                    ))}
                </Select>
            </Field>
            <Field span={24} name="inspection" label="Текширув" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <TextArea style={{ borderRadius: 0, width: '100%' }} />
            </Field>
        </Form>
    );
};
