import { Box, Field, Form, Loading, PageHeader, Select } from '@/components';
import { useOneSafetyNoteQuery } from '@/lib/services';
import { createSafetyNotesMutation, updateSafetyNotesMutation } from '@/lib/services/mutations/education-info copy';
import { useSelectableBrieifngQuery } from '@/lib/services/queries/briefing';
import { ISafetyNotesBody } from '@/types/safety-info';
import { Checkbox, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const MutateSafetyNotes = () => {
    const [form] = useForm();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const { mutateAsync } = createSafetyNotesMutation(id!);
    const { mutateAsync: updateMutateAsync } = updateSafetyNotesMutation(id!);
    const { data, isLoading } = useOneSafetyNoteQuery(id!, type!);
    const { data: selectableBriefing, isPending } = useSelectableBrieifngQuery();

    const onFinish = (values: ISafetyNotesBody) => {
        if (id) {
            if (type == 'edit') {
                updateMutateAsync({
                    date: dayjs(values.date),
                    briefing: values.briefing,
                    employerSignature: values.employerSignature ? true : false,
                });
            } else {
                mutateAsync({
                    date: dayjs(values.date),
                    briefing: values.briefing,
                    employerSignature: values.employerSignature ? true : false,
                    personalCard: id,
                });
            }
        }
    };

    useEffect(() => {
        if (id && type == 'edit' && data) {
            form.setFieldsValue({
                date: dayjs(data?.date),
                briefing: data?.briefing?.id,
                employerSignature: data?.employer_signature ? true : false,
            });
        }
    }, [data]);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <PageHeader title={'9.Отметка о вручении инструкций по охране труда, промышленной безопасности и производственной санитарии'} />
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} name={'date'} label={'Санаси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санаси" />
                </Field>

                <Field span={24} name={'briefing'} required label={'Инструксия'}>
                    <Select loading={isPending} options={selectableBriefing?.map((v) => ({ label: v.fullname, value: v.id }))} placeholder="Инструксияни киритинг" />
                </Field>

                <Field span={24} name={'employerSignature'} valuePropName="checked" isRequired={false}>
                    <Box $justify="space-between">
                        <span>Ишчи имзоси:</span>
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
