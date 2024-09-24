import { Box, Field, Form, PageHeader } from '@/components';
import { useOneRepeatQuery } from '@/lib/services';
import { createEmergencyBriefingMutation, updateEmergencyBriefingMutation } from '@/lib/services/mutations/emergency-briefing';
import { IRepeatBriefingBody } from '@/types/safety-info';
import { Checkbox, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

type mode = 'edit' | 'create';

export const MutationEmergencyBriefing = () => {
    const [form] = useForm();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const { id } = useParams();
    const type = queryParams.get('type') as mode;

    const { data } = useOneRepeatQuery(type === 'edit' ? (id as string) : null);

    const { mutateAsync } = createEmergencyBriefingMutation(id!);
    const { mutateAsync: updateMutateAsync } = updateEmergencyBriefingMutation(id!);

    useEffect(() => {
        if (type === 'edit') {
            form.setFieldValue('briefingDate', dayjs(data?.briefing_date));
            form.setFieldValue('briefingName', data?.briefing_name);
            form.setFieldValue('master_signature', data?.master_signature);
            form.setFieldValue('employer_signature', data?.employer_signature);
        }
    }, []);

    const onFinish = (values: IRepeatBriefingBody) => {
        if (id) {
            if (type === 'edit') {
                updateMutateAsync({
                    briefingDate: dayjs(values.briefingDate),
                    briefingName: values.briefingName,
                    master_signature: values.master_signature ? true : false,
                    employer_signature: values.employer_signature ? true : false,
                });
            } else {
                mutateAsync({
                    briefingDate: dayjs(values.briefingDate),
                    briefingName: values.briefingName,
                    master_signature: values.master_signature ? true : false,
                    employer_signature: values.employer_signature ? true : false,
                    personalCard: id,
                });
            }
        }
    };

    return (
        <>
            <PageHeader title={'6.Сведения о прохождении периодического (повторного) инструктажа и обучения'} />
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field name="briefingDate" span={24} label={'Иструксия ўтказилган санси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Иструксия ўтказилган санси" />
                </Field>

                <Field span={24} name={'briefingName'} required label={'Инструксия номи (программа бўйича)'} placeholder="Инструксия номи (программа бўйича) киритинг" />

                <Field valuePropName="checked" span={24} name={'master_signature'} isRequired={false}>
                    <Box $justify="space-between">
                        <span>Мастер имзоси: </span>
                        <Checkbox />
                    </Box>
                </Field>

                <Field valuePropName="checked" span={24} name={'employer_signature'} isRequired={false}>
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
