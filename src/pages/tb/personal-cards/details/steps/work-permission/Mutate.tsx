import { Box, Field, Form, Loading, PageHeader, Select } from '@/components';
import { StatusOptions } from '@/constants';
import { useGetWorkPermissionQuery } from '@/lib/services';
import { createWorkPermissionMutation } from '@/lib/services/mutations/work-permission';
import { IWorkPermissionBody } from '@/types/work-permission';
import { Checkbox, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MutateWorkPermission = () => {
    const [form] = useForm();
    const { id } = useParams();
    const { data, isLoading } = useGetWorkPermissionQuery(id!);
    const { mutateAsync } = createWorkPermissionMutation(id!);

    const onFinish = (values: IWorkPermissionBody) => {
        if (id) {
            mutateAsync({
                order_number: values.order_number,
                fullName: values.fullName,
                status: values.status,
                permission_work_date: dayjs(values.permission_work_date),
                workshop_director_signature: values.workshop_director_signature,
                master_signature: values.master_signature,
                teacher_signature: values.teacher_signature,
                personalCard: id,
                inpector_signature: values.inpector_signature,
            });
        }
    };

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                order_number: data.order_number,
                fullName: data.fullName,
                status: data.status,
                permission_work_date: dayjs(data.permission_work_date),
                workshop_director_signature: data.workshop_director_signature,
                master_signature: data.master_signature,
                inpector_signature: data.inpector_signature,
                teacher_signature: data.teacher_signature,
            });
        }
    }, [data]);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <PageHeader title={'4.Ишлашга рухсат бериш'} />
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} name={'order_number'} required label={'Буйруқ рақами '} placeholder="Буйруқ рақамини киритинг" />

                <Field span={24} name={'fullName'} label={'Фамилия И.О.'} required placeholder="Фамилия И.О." />

                <Field span={24} name={'status'} required label={'Бахоси'} placeholder="Бахоси танланг">
                    <Select placeholder={'Бахоси танланг'} options={StatusOptions} />
                </Field>

                <Field span={24} name={'permission_work_date'} label={'Мустақил ишлашга рухсат бериш санаси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Мустақил ишлашга рухсат бериш санаси" />
                </Field>

                <Field span={24} name={'workshop_director_signature'} valuePropName="checked" required={false}>
                    <Box $justify="space-between">
                        <span>Начальник цеха (уч-ка): </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} valuePropName="checked" name={'master_signature'} required={false}>
                    <Box $justify="space-between">
                        <span>Мастер (начальник смены): </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} valuePropName="checked" name={'inpector_signature'} required={false}>
                    <Box $justify="space-between">
                        <span>Общественный инспектор:</span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} valuePropName="checked" name={'teacher_signature'} required={false}>
                    <Box $justify="space-between">
                        <span>Обучающее лицо: </span>
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
