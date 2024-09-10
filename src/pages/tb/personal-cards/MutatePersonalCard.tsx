import { Box, Field, Form, Icon, PageHeader, Select } from '@/components';
import { IMAGE_URL } from '@/constants';
import { useUpload } from '@/lib/hooks';
import { DatePicker, Upload } from 'antd';
import { FC } from 'react';

interface IProps {
    type: 'create' | 'edit';
}

export const MutatePersonalCard: FC<IProps> = ({ type = 'create' }) => {
    const {
        fieldProps,
        uploadProps: { fileList, onChange },
        handleSetImages,
    } = useUpload(() => {}, true);
    return (
        <>
            <PageHeader title="Личная карточка" />
            <Box $m="20px">
                <Form style={{ width: '100%' }}>
                    <Field span={24} placeholder="Таб.№ киритинг" required name={'tab_number'} label={'Таб.№'} />

                    <Field span={24} placeholder="Фамилия И.О. киритинг" required name={'name'} label={'Фамилия И.О.'} />

                    <Field name={'workshop'} span={24} label={'Цех'}>
                        <Select placeholder={'Цехни танланг'} options={[]} />
                    </Field>

                    <Field name={'profession'} span={24} label={'Должность, профессия'}>
                        <Select placeholder={'Должность, профессия танланг'} options={[]} />
                    </Field>

                    <Field name={'profession'} span={24} label={'Образование'}>
                        <Select placeholder={'Образование танланг'} options={[]} />
                    </Field>

                    <Field name={'birth_date'} span={24} label="Год рождения">
                        <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санани танланг" />
                    </Field>

                    <Field name={'birth_date'} span={24} label="Дата поступления на работу">
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
