import { Box, Field, Form, PageHeader } from '@/components';
import { Checkbox, DatePicker } from 'antd';

export const MutateEducationInfo = () => {
    return (
        <>
            <PageHeader title={'8.Сведения о прохождении периодического (повторного) инструктажа и обучения и обучения'} />
            <Form style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} label={'Ўқиш санаси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Ўқиш санаси" />
                </Field>

                <Field span={24} name={'order_number'} required label={'Ўқиш тури'} placeholder="Ўқиш тури киритинг" />

                <Field span={24} name={'education_type'} required label={'Ҳужжат рақами'} placeholder="Ҳужжат рақами киритинг" />

                <Field span={24} name={'signarure'} required={false}>
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
