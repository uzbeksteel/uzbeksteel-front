import { Field, Form, PageHeader } from '@/components';
import { createIntroBriefingMutation } from '@/lib/services/mutations/personal-card';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface IProps {
    type: 'create' | 'edit';
}

export interface IIntroBriefingPayload {
    fullName: string;
    dateTime: string | Dayjs | Date;
    personalCardId: string;
}

export const MutateIntroBriefing: FC<IProps> = ({ type = 'create' }) => {
    const { id } = useParams();

    const { mutateAsync } = createIntroBriefingMutation(id!);

    const onFinish = (values: IIntroBriefingPayload) => {
        if (type === 'create') {
            mutateAsync({
                fullName: values.fullName,
                dateTime: dayjs(values.dateTime),
                personalCardId: id!,
            });
        }
    };
    return (
        <>
            <PageHeader title={'1. Вводный инструктаж'} />

            <Form style={{ padding: '20px' }} onFinish={onFinish}>
                <Field span={24} name={'fullName'} label={'Фамилия И.О.'} required placeholder="Фамилия И.О." />
                <Field name={'dateTime'} span={24} label={'Сана'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санани танланг" />
                </Field>
            </Form>
        </>
    );
};
