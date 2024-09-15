import { Box, Field, Form, PageHeader, Select } from '@/components';
import { Checkbox, DatePicker } from 'antd';

export const MutateSafetyInfo = () => {
    return (
        <>
            <PageHeader title={'5.Сведения о проверке знаний по охране труда и промышленной безопасности'} />
            <Form style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} label={'Сана'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санани танланг" />
                </Field>

                <Field span={24} name={'order_number'} required label={'Тартиб рақами'} placeholder="Тартиб рақами киритинг" />

                <Field span={24} name={'workshop'} required label={'Текширилиш сабаби'} placeholder="Текширилиш сабаби танланг">
                    <Select placeholder={'Текширилиш сабаби танланг'} />
                </Field>

                <Field span={24} name={'signarure'} required={false}>
                    <Box $justify="space-between">
                        <span>Яратган шахс имзоси: </span>
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
