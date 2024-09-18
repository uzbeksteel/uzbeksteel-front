import { Box, Field, Form, PageHeader, Select } from '@/components';
import { Checkbox, DatePicker } from 'antd';

export const MutateWorkPermission = () => {
    return (
        <>
            <PageHeader title={'4.Ишлашга рухсат бериш'} />
            <Form style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} name={'order_number'} required label={'Буйруқ рақами '} placeholder="Буйруқ рақамини киритинг" />

                <Field span={24} label={'Фамилия И.О.'} required placeholder="Фамилия И.О." />

                <Field span={24} name={'workshop'} required label={'Бахоси'} placeholder="Бахоси танланг">
                    <Select placeholder={'Бахоси танланг'} />
                </Field>

                <Field span={24} label={'Мустақил ишлашга рухсат бериш санаси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Мустақил ишлашга рухсат бериш санаси" />
                </Field>

                <Field span={24} name={'signarure'} required={false}>
                    <Box $justify="space-between">
                        <span>Начальник цеха (уч-ка): </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'signarure'} required={false}>
                    <Box $justify="space-between">
                        <span>Мастер (начальник смены): </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'signarure'} required={false}>
                    <Box $justify="space-between">
                        <span>Общественный инспектор:</span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'signarure'} required={false}>
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
