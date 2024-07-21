import { Field } from '@/components';
import { DatePicker, Form, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useGraphicStore } from '@/store';
import { useEffect } from 'react';
import { useCreateGraphicQuery } from '@/lib/services/queries/graphic.ts';
import { modal } from '@/app';
import { getAllWorkshopsQuery } from '@/lib/services';

export const Content = () => {
    const { setCreateFormInstance } = useGraphicStore();
    const [form] = Form.useForm();
    const { mutate } = useCreateGraphicQuery(onSuccess);
    const { data: workshops } = getAllWorkshopsQuery();
    useEffect(() => {
        setCreateFormInstance(form);
    }, [form]);

    function onSuccess() {
        modal.success({
            title: 'Текширув қўшиш мувафақиятли амалга оширилди!',
        });
    }

    return (
        <Form layout="vertical" form={form} onFinish={(data) => mutate(data)} requiredMark>
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
