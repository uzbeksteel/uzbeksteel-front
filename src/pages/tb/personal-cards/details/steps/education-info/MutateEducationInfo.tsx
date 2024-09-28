import { Box, Field, Form, Loading, PageHeader, Select } from '@/components';
import { useOneEducationInfoQuery } from '@/lib/services';
import { createEducationInfoMutation, updateEducationInfoMutation } from '@/lib/services/mutations/education-info';
import { IEducationInfoBody } from '@/types/safety-info';
import { Checkbox, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const MutateEducationInfo = () => {
    const [form] = useForm();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const { mutateAsync } = createEducationInfoMutation(id!);
    const { mutateAsync: updateMutateAsync } = updateEducationInfoMutation(id!);
    const { data, isLoading } = useOneEducationInfoQuery(id!, type!);

    const onFinish = (values: IEducationInfoBody) => {
        if (id) {
            if (type == 'edit') {
                updateMutateAsync({
                    educationDate: dayjs(values.educationDate),
                    studyType: values.studyType,
                    reportNumber: values.reportNumber,
                    authorSignature: values.authorSignature ? true : false,
                });
            } else {
                mutateAsync({
                    educationDate: dayjs(values.educationDate),
                    studyType: values.studyType,
                    reportNumber: values.reportNumber,
                    authorSignature: values.authorSignature ? true : false,
                    personalCard: id,
                });
            }
        }
    };

    useEffect(() => {
        if (id && type == 'edit' && data) {
            form.setFieldsValue({
                educationDate: dayjs(data?.educationDate),
                studyType: data?.study_type,
                reportNumber: data?.report_number,
                authorSignature: data?.author_signature,
            });
        }
    }, [data]);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <PageHeader title={'8.Сведения о прохождении периодического (повторного) инструктажа и обучения и обучения'} />
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field name={'educationDate'} span={24} label={'Ўқиш санаси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Ўқиш санаси" />
                </Field>

                <Field span={24} name={'studyType'} required label={'Ўқиш тури'}>
                    <Select
                        options={[
                            { label: 'BIRLAMCHI', value: 'BIRLAMCHI' },
                            { label: 'IKKILAMCHI', value: 'IKKILAMCHI' },
                        ]}
                        placeholder="Ўқиш тури киритинг"
                    />
                </Field>

                <Field span={24} name={'reportNumber'} required label={'Ҳужжат рақами'} placeholder="Ҳужжат рақами киритинг" />

                <Field span={24} name={'authorSignature'} valuePropName="checked" isRequired={false}>
                    <Box $justify="space-between">
                        <span>Яратган шахс имзоси:</span>
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
