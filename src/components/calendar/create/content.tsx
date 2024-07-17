import { Field } from '@/components';
import { DatePicker, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useGraphicStore } from '@/store';
import { useEffect } from 'react';
import { useCreateGraphicQuery } from '@/lib/services/queries/graphic.ts';
import { modal } from '@/app';

export const Content = () => {
    const { setCreateFormInstance } = useGraphicStore();
    const [form] = Form.useForm();
    const { mutate } = useCreateGraphicQuery(onSuccess);
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
            <Field span={24} name="workshop" label="Цех" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]} />
            <Field span={24} name="inspection" label="Текширув" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <TextArea style={{ borderRadius: 0, width: '100%' }} />
            </Field>
        </Form>
    );
};
