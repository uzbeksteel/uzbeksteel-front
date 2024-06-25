import { Field } from '@/components';
import { DatePicker, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export const Content = () => {
    return (
        <Form layout="vertical" requiredMark>
            <Field span={24} name="date" label="Сана">
                <DatePicker style={{ borderRadius: 0, width: '100%' }} />
            </Field>
            <Field span={24} name="workshop" label="Цех" />
            <Field span={24} name="inspection" label="Текширув">
                <TextArea style={{ borderRadius: 0, width: '100%' }} />
            </Field>
        </Form>
    );
};
