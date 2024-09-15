import { Field, Form, PageHeader } from '@/components';
import { DatePicker } from 'antd';
import { FC } from 'react';

interface IProps {
    type: 'create' | 'edit';
}

export const MutateIntroBriefing: FC<IProps> = ({ type = 'create' }) => {
    return (
        <>
            <PageHeader title={'1. Вводный инструктаж'} />
            {type}
            <Form style={{ padding: '20px' }}>
                <Field span={24} label={'Фамилия И.О.'} required />
                <Field span={24} label={'Сана'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санани танланг" />
                </Field>
            </Form>
        </>
    );
};
