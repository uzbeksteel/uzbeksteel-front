import { Box, Field, Form, PageHeader } from '@/components';
import { useGetPersonalCardMedicalQuery } from '@/lib/services';
import { createMedicalMutation, updateMedicalMutation } from '@/lib/services/mutations/personal-card';
import { TCreateMedicalPayload } from '@/types/personal-cards';
import { Checkbox, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MutateHealthResult = ({ type }: { type: 'create' | 'edit' }) => {
    const [form] = useForm();
    const { id } = useParams();
    const { data } = useGetPersonalCardMedicalQuery(type === 'edit' ? id : null);
    const { mutateAsync: createMedicalCard } = createMedicalMutation(id as string);
    const { mutateAsync: updateMedicalCard } = updateMedicalMutation(id as string, data?.id as string);

    useEffect(() => {
        if (type === 'edit' && data) {
            form.setFieldValue('mediacalExamName', data.mediacal_exam_name);
            form.setFieldValue('mediacalExamDate', dayjs(data.mediacal_exam_date));
            form.setFieldValue('authorSignature', data.author_signature);
        }
    }, [id, data]);

    const onFinish = (value: Partial<TCreateMedicalPayload>) => {
        if (type === 'create') {
            createMedicalCard({
                mediacalExamDate: dayjs(value.mediacalExamDate),
                mediacalExamName: value.mediacalExamName as string,
                personalCard: id as string,
                authorSignature: value.authorSignature as boolean,
            });
        } else {
            updateMedicalCard({
                mediacalExamDate: dayjs(value.mediacalExamDate),
                mediacalExamName: value.mediacalExamName as string,
                authorSignature: value.authorSignature as boolean,
            });
        }
    };
    return (
        <>
            <PageHeader title={'10. Сведения о прохождении медицинского осмотра'} />
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field name="mediacalExamDate" span={24} label={'Ўқиш санаси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Ўқиш санаси" />
                </Field>

                <Field span={24} name="mediacalExamName" required label={'Тиббий кўрик номи'} placeholder="Тиббий кўрик номи киритинг" />

                <Field span={24} name={'authorSignature'} valuePropName="checked" required={false}>
                    <Box $justify="space-between">
                        <span>Яратган шахс имзоси:</span>
                        <Checkbox>Имзо</Checkbox>
                    </Box>
                </Field>
            </Form>
        </>
    );
};
