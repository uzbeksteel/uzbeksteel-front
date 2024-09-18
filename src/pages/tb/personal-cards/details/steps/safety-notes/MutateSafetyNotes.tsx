import { Box, Field, Form, PageHeader } from '@/components';
import { Checkbox, DatePicker } from 'antd';

export const MutateSafetyNotes = () => {
    return (
        <>
            <PageHeader title={'9.Отметка о вручении инструкций по охране труда, промышленной безопасности и производственной санитарии'} />
            <Form style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} label={'Санаси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санаси" />
                </Field>

                <Field span={24} name={'order_number'} required label={'Инструксия номи'} placeholder="Инструксия номи киритинг" />

                <Field span={24} name={'education_type'} required label={'Инструксия рақами'} placeholder="Инструксия рақами киритинг" />

                <Field span={24} name={'signarure'} required={false}>
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
