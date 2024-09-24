import { Box, Field, Form, Loading, PageHeader, Select } from '@/components';
import { InspectionOptions } from '@/constants';
import { useOneSafetyInfoQuery } from '@/lib/services';
import { createSafetyInfoMutation, updateSafetyInfoMutation } from '@/lib/services/mutations/safety-info';
import { ISafetyInfoBody } from '@/types/safety-info';
import { Checkbox, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const MutateSafetyInfo = () => {
    const [form] = useForm();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const { mutateAsync } = createSafetyInfoMutation(id!);
    const { mutateAsync: updateMutateAsync } = updateSafetyInfoMutation(id!);
    const { data, isLoading } = useOneSafetyInfoQuery(id!, type!);

    useEffect(() => {
        if (type === 'edit') {
            form.setFieldsValue({
                ordinal_number: data?.ordinal_number,
                date: dayjs(data?.date),
                reason: data?.reason,
                author_signature: data?.author_signature,
                employer_signature: data?.employer_signature,
            });
        }
    }, [data]);

    const onFinish = (values: ISafetyInfoBody) => {
        if (id) {
            if (type == 'edit') {
                updateMutateAsync({
                    date: dayjs(values.date),
                    ordinal_number: +values.ordinal_number,
                    reason: values.reason,
                    author_signature: values.author_signature ? true : false,
                    employer_signature: values.employer_signature ? true : false,
                });
            } else {
                mutateAsync({
                    date: dayjs(values.date),
                    ordinal_number: +values.ordinal_number,
                    reason: values.reason,
                    author_signature: values.author_signature ? true : false,
                    employer_signature: values.employer_signature ? true : false,
                    personalCard: id,
                });
            }
        }
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <PageHeader title={'5.Сведения о проверке знаний по охране труда и промышленной безопасности'} />
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} name={'date'} label={'Сана'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="date" placeholder="Санани танланг" />
                </Field>

                <Field span={24} name={'ordinal_number'} required label={'Тартиб рақами'} placeholder="Тартиб рақами киритинг" />

                <Field span={24} name={'reason'} required label={'Текширилиш сабаби'}>
                    <Select placeholder={'Текширилиш сабаби танланг'} options={InspectionOptions} />
                </Field>

                <Field span={24} name={'author_signature'} valuePropName="checked" isRequired={false}>
                    <Box $justify="space-between">
                        <span>Яратган шахс имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'employer_signature'} valuePropName="checked" isRequired={false}>
                    <Box $justify="space-between">
                        <span>Ишчи имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>
            </Form>
        </>
    );
};
