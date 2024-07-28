import { useNavigate, useParams } from 'react-router-dom';
import { Form as AntdForm } from 'antd';
import { Box, Field, Form, Icon, Typography } from '@/components';
import { IDanger } from '@/types/danger.ts';

export const AddDanger = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [form] = AntdForm.useForm<Omit<IDanger, 'workshopId'>>();
    const workshopId = param.id;
    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Ҳатарлар
                </Typography>
            </Box>
            <Box style={{ background: 'white' }} $p="20px" $m="10px">
                <Form form={form} style={{ width: '100%' }}>
                    <Field name="profession" isRequired span={24} label="Должность, профессия" placeholder="Должность, профессия" />
                    <Field name="typeActivity" isRequired span={24} label="Вид деятельности с условным обозначением" placeholder="Вид деятельности с условным обозначением" />
                    <Field name="typeDescriptionOfHazard" isRequired span={24} label="Тип и описание опасности" placeholder="Тип и описание опасности" />
                    <Field name="riskAssociatedWithDanger" isRequired span={24} label="Риск связанный с опасностью" placeholder="Риск связанный с опасностью" />
                    <Field name="probability" isRequired span={24} label="Вероятность" placeholder="Вероятность" />
                    <Field name="seriousness" isRequired span={24} label="Серьезность" placeholder="Серьезность" />
                    <Field name="riskLevel" isRequired span={24} label="Степень риска" placeholder="Степень риска" />
                    <Field name="controlMethods" isRequired span={24} label="Методы контроля и существующие способы защиты" placeholder="Методы контроля и существующие способы защиты" />
                </Form>
            </Box>
        </>
    );
};
