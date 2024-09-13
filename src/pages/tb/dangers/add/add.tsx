import { useNavigate, useParams } from 'react-router-dom';
import { Form as AntdForm } from 'antd';
import { Box, Field, Form, Icon, Select, Switch, Typography } from '@/components';
import { IDanger } from '@/types/danger.ts';
import { useCreateDangerQuery } from '@/lib/services/queries/dangers.ts';
import { history } from '@/lib/utils';
import { Significance } from '@/pages/tb/dangers/constants.ts';

export const AddDanger = () => {
    const param = useParams();
    const navigate = useNavigate();
    const { mutate } = useCreateDangerQuery(onSuccess);
    const [form] = AntdForm.useForm<Omit<IDanger, 'workshopId'>>();
    const workshopId = param.id;

    function onSuccess() {
        history.back();
    }

    const onFinish = (data: Omit<IDanger, 'workshopId'>) => {
        mutate({ ...data, workshop: workshopId as never });
    };
    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Ҳатарлар
                </Typography>
            </Box>
            <Box style={{ background: 'white' }} $p="20px" $m="10px">
                <Form form={form} onFinish={onFinish} style={{ width: '100%' }}>
                    <Field name="profession" isRequired span={24} label="Должность, профессия" placeholder="Должность, профессия" />
                    <Field name="typeActivity" isRequired span={24} label="Вид деятельности с условным обозначением" placeholder="Вид деятельности с условным обозначением" />
                    <Field name="typeDescriptionOfHazard" isRequired span={24} label="Тип и описание опасности" placeholder="Тип и описание опасности" />
                    <Field name="riskAssociatedWithDanger" isRequired span={24} label="Риск связанный с опасностью" placeholder="Риск связанный с опасностью" />
                    <Field name="controlMethods" isRequired span={24} label="Методы контроля и существующие способы защиты" placeholder="Методы контроля и существующие способы защиты" />
                    <Field name="importance" isRequired span={24} label="Аҳамиятлилик">
                        <Select placeholder="Аҳамиятлилик" options={Significance.map((el) => ({ value: el.code, label: el.title }))} />
                    </Field>
                    <Box $direction="column" $gap="20px">
                        <Switch initialValue={false} switchProps={{ size: 'small' }} name="isStaffQualified" valuePropName="checked" label="Фаолиятни амалга оширадиган ходимларнинг малакаси етарлими?" />
                        <Switch initialValue={false} switchProps={{ size: 'small' }} name="areToolsCompliant" valuePropName="checked" label="Фойдаланаётган асбоб ва ускуналар талабларга жавоб берадими?" />
                        <Switch initialValue={false} switchProps={{ size: 'small' }} name="isDocumentationMethodAvailable" valuePropName="checked" label="Фаолиятни амалга оширишнинг ҳужжатлаштирилган усули мавжудми?" />
                        <Switch initialValue={false} switchProps={{ size: 'small' }} name="areKPIsMeasured" valuePropName="checked" label="Фаолиятнинг асосий кўрсаткичлари ўлчаниши ва назорат қилиниши амалга ошириладими?" />
                        <Switch initialValue={false} switchProps={{ size: 'small' }} name="areEnvironmentalStandardsMet" valuePropName="checked" label="Атроф-муҳит омиллари (ёруғлик, шовқиндан ҳимояланиш, юқори ҳарорат) талабларга жавоб берадими?" />
                    </Box>
                </Form>
            </Box>
        </>
    );
};
