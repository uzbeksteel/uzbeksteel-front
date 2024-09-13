import { Box, Card, Field, Form } from '@/components';
import { DatePicker } from 'antd';
import { Content } from './content';

export const PersonalCardDetailItem = () => {
    return (
        <Content title="1. Вводный инструктаж">
            <Box $m="20px">
                <Card>
                    <h3>1. Вводный инструктаж</h3>
                    <p>___________________________ прослушал вводный инструктаж по охране труда, промышленной безопасности, санинструктаж, противопожарный инструктаж при поступлении на работу. «_______» _____________ _______ . Подпись инженера ООТиПБ Подпись получившего инструктаж </p>
                </Card>
            </Box>
            <Box $m="20px" $p="20px" style={{ display: 'block', background: '#FFF' }}>
                <Form requiredMark>
                    <Field span={24} name="lastName" label="Фамилия И.О." placeholder="Фамилия И.О. киритинг" />
                    <Field span={24} name="date" label="Сана" placeholder="Санани танланг">
                        <DatePicker style={{ borderRadius: 0, width: '100%' }} />
                    </Field>
                </Form>
            </Box>
        </Content>
    );
};
