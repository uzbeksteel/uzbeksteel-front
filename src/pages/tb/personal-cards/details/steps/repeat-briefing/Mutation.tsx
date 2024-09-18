import { Box, Field, Form, PageHeader } from '@/components';
import { Checkbox, DatePicker } from 'antd';

export const MutationRepeatBriefing = () => {
    return (
        <>
            <PageHeader title={'6.Сведения о прохождении периодического (повторного) инструктажа и обучения'} />
            <Form style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} label={'Иструксия ўтказилган санси'} required>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Иструксия ўтказилган санси" />
                </Field>

                <Field span={24} name={'order_number'} required label={'Инструксия номи (программа бўйича)'} placeholder="Инструксия номи (программа бўйича) киритинг" />

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
