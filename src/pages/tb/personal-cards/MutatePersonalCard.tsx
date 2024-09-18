import { Box, Field, Form, Icon, Loading, PageHeader, Select } from '@/components';
import { IMAGE_PREVIEW_URL, IMAGE_URL } from '@/constants';
import { useUpload } from '@/lib/hooks';
import { getAllProfessionsQuery, getAllWorkshopsQuery, useGetPersonalCardQuery } from '@/lib/services';
import { usePersonalCardCreate, usePersonalCardUpdate } from '@/lib/services/mutations/personal-card';
import { DatePicker, Upload } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface IProps {
    type: 'create' | 'edit';
}

export const MutatePersonalCard: FC<IProps> = ({ type = 'create' }) => {
    const [form] = useForm();
    const { id } = useParams();

    const { data: workshops, isLoading, isPending } = getAllWorkshopsQuery();
    const { data: professions, isLoading: ProfessionLoading } = getAllProfessionsQuery();
    const { data, isLoading: singleLoading } = useGetPersonalCardQuery(id);

    const { mutateAsync } = usePersonalCardCreate();
    const { mutateAsync: updatePersonalCard } = usePersonalCardUpdate(id!);
    const {
        fieldProps,
        uploadProps: { fileList, onChange },
        setFileList,
    } = useUpload(() => {}, true);

    if (singleLoading) {
        return <Loading />;
    }

    const onFinish = (values: any) => {
        if (type === 'create') {
            mutateAsync({
                ...values,
                date_of_entry_to_work: dayjs(values.date_of_entry_to_work),
                fileId: values.upload.file.response.id,
            });
        } else if (type === 'edit') {
            updatePersonalCard({
                workShopId: values.workShopId,
                professionId: values.professionId,
                education: values.education,
                date_of_entry_to_work: dayjs(values?.date_of_entry_to_work),
                fileId: values?.upload?.file?.response?.id || values.upload,
            });
        }
    };

    useEffect(() => {
        if (id) {
            form.setFieldsValue({
                tabNumber: data?.user?.tab_number,
                workShopId: data?.workshop?.id,
                professionId: data?.profession?.id,
                education: data?.education,
                date_of_entry_to_work: dayjs(data?.date_of_entry_to_work),
                upload: data?.files?.id,
            });
            if (data) {
                setFileList([
                    {
                        url: `${IMAGE_PREVIEW_URL}/${data?.files?.url}`,
                        uid: data?.id,
                        name: 'Image Preview',
                    },
                ]);
            }
        }
    }, []);

    return (
        <>
            <PageHeader title="Личная карточка" />
            <Box $m="20px">
                <Form form={form} style={{ width: '100%' }} onFinish={onFinish} loading={isLoading || ProfessionLoading || isPending}>
                    <Field span={24} placeholder="Таб.№ киритинг" required name={'tabNumber'} label={'Таб.№'} disabled={type === 'edit'} />

                    <Field name={'workShopId'} span={24} label={'Цех'}>
                        <Select placeholder={'Цехни танланг'} options={workshops.map((w) => ({ label: w.name, value: w.id }))} />
                    </Field>
                    <Field name={'professionId'} span={24} label={'Должность, профессия'}>
                        <Select placeholder={'Должность, профессия танланг'} options={professions.map((p) => ({ label: p.name, value: p.id }))} />
                    </Field>

                    <Field name={'education'} span={24} label={'Образование'} placeholder={'Образование танланг'} required={false} />
                    <Field name={'date_of_entry_to_work'} span={24} label="Дата поступления на работу">
                        <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санани танланг" />
                    </Field>
                    <Field
                        span={24}
                        name={'upload'}
                        label="Расмини киритинг"
                        rules={[
                            { required: true },
                            {
                                validator: (_, value) => {
                                    if (value?.fileList?.length > 1) {
                                        return Promise.reject(new Error('Only one image is allowed'));
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Upload multiple={false} action={`${IMAGE_URL}`} fileList={fileList} onChange={onChange} listType="picture-card" {...fieldProps}>
                            <Icon size="small" name="Plus" style={{ border: '1px solid #d9d9d9', borderRadius: 10 }} />
                        </Upload>
                    </Field>
                </Form>
            </Box>
        </>
    );
};
