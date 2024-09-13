import { Box, Field, Form, PageHeader, Select } from '@/components';
import { Checkbox, DatePicker } from 'antd';

export const MutateOrderReport = () => {
    return (
        <>
            <PageHeader title={'3.Буйруқ'} />
            <Form style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} name={'order_number'} required label={'Буйруқ рақами '} placeholder="Буйруқ рақамини киритинг" />

                <Field span={24} name={'workshop'} required label={'Цех'} placeholder="Цехни танланг">
                    <Select placeholder={'Цехни танланг'} />
                </Field>

                <Field span={24} label={'Сана'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санани танланг" />
                </Field>

                <Field span={24} label={'Фамилия И.О.'} required />

                <Field span={24} name={'profession'} required label={'Касби'} placeholder="Касбини танланг">
                    <Select placeholder={'Касбини танланг'} />
                </Field>

                <Field span={24} name={'order_number'} required label={'Бириктирилган шахс исим фамиляси'} placeholder="Бириктирилган шахс исим фамиляси киритинг" />

                <Field span={24} name={'order_number'} required label={'Стажировка ўтказишни таминловчи шахс'} placeholder="Стажировка ўтказишни таминловчи шахс киритинг" />

                <Field span={24} name={'signarure'} required={false}>
                    <Box $justify="space-between">
                        <span>Цех бошлиғининг имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'signarure'} required={false}>
                    <Box $justify="space-between">
                        <span>Мастер имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'signarure'} required={false}>
                    <Box $justify="space-between">
                        <span>Ўқитган шахс имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'signarure'} required={false}>
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
