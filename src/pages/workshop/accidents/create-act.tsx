import { Box, Field, Form, Icon, Select, Typography } from '@/components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DatePicker, Form as AntdForm } from 'antd';
import { Genders } from '@/constants/gender.ts';
import { IAccidentAct } from '@/types/accident.ts';
import { createAccidentActMutation } from '@/lib/services/mutations/accident.ts';

export const CreateAct = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { mutate } = createAccidentActMutation();
    const [form] = AntdForm.useForm<IAccidentAct>();
    const accidentId = searchParams.get('accidentId');
    const onFinish = (data: Omit<IAccidentAct, 'accidentId'>) => {
        mutate({ ...data, accidentId } as IAccidentAct);
    };
    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Акт яратиш
                </Typography>
            </Box>
            <Box $p="20px" $direction="column" style={{ background: '#FFF' }}>
                <Form form={form} onFinish={onFinish}>
                    <Field name="accidentPlace" label="Бахтсиз ходиса юз берган жой" placeholder="Бахтсиз ходиса юз берган жой" span={24} required />
                    <Field name="fullName" label="Жабирланувчинг исми , фамиляси, отасинг исми" placeholder="Жабирланувчинг исми , фамиляси, отасинг исми" span={24} required />
                    <Field name="gender" label="Жинси" span={24} required>
                        <Select placeholder="Жинси" options={Genders} />
                    </Field>
                    <Field name="age" label="Ёши" placeholder="Ёши" span={24} required isInputNumber />
                    <Field name="profession" label="Касби" placeholder="Касби" span={24} required />
                    <Field name="rank" label="Разряди" placeholder="Разряди" span={24} required />
                    <Field name="seniority" label="Бахтсиз ходиса юз берганда бажараётган иши бўйича иш стажи" placeholder="Бахтсиз ходиса юз берганда бажараётган иши бўйича иш стажи" span={24} required isInputNumber />
                    <Field name="entryInstructionDate" label="Кириш ёъриқномаси санаси" span={24} required>
                        <DatePicker placeholder="Кириш ёъриқномаси санаси" style={{ borderRadius: '0', width: '100%' }} />
                    </Field>
                    <Field name="laborProtectionStudiedDate" label="Мехнат хавфсизлиги бўйича ўқитиш санси" span={24} required>
                        <DatePicker placeholder="Мехнат хавфсизлиги бўйича ўқитиш санси" style={{ borderRadius: '0', width: '100%' }} />
                    </Field>
                    <Field name="initialInstructionDate" label="Дастлабки ёъриқнома санаси" span={24} required>
                        <DatePicker placeholder="Дастлабки ёъриқнома санаси" style={{ borderRadius: '0', width: '100%' }} />
                    </Field>
                    <Field name="medicalExaminationDate" label="Тиббий кўрикдан ўтган санаси" span={24} required>
                        <DatePicker placeholder="Тиббий кўрикдан ўтган санаси" style={{ borderRadius: '0', width: '100%' }} />
                    </Field>
                    <Field name="departmentHighRiskInspection" label="Ўта хавфли ишларни бажариш учун бўлимларни текшириш" placeholder="Ўта хавфли ишларни бажариш учун бўлимларни текшириш" span={24} required />
                    <Field name="accidentDate" label="Бахтсиз ходиса юз берган сана ва вақти" span={24} required>
                        <DatePicker placeholder="Бахтсиз ходиса юз берган сана ва вақти" style={{ borderRadius: '0', width: '100%' }} />
                    </Field>
                    <Field name="timeUntilAccident" label="Иш бошланганда ходисага юз бергунгача бўлган вақт соат ва минут" placeholder="Иш бошланганда ходисага юз бергунгача бўлган вақт соат ва минут" span={24} required />
                    <Field name="accidentSituation" label="Бахтсиз ходиса холати" placeholder="Бахтсиз ходиса холати" span={24} required />
                    <Field name="accidentReason" label="Бахтсиз ходиса сабаблари" placeholder="Бахтсиз ходиса сабаблари" span={24} required />
                    <Field name="causalTool" label="Жарохат етказилишига сабаб бўлган асбоб ускуна" placeholder="Жарохат етказилишига сабаб бўлган асбоб ускуна" span={24} required />
                    <Field name="victimVigilance" label="Жарохатланувчининг хушёрлиги(алкогол ичган ёки ичмаганлиги)" placeholder="Жарохатланувчининг хушёрлиги(алкогол ичган ёки ичмаганлиги)" span={24} required textarea />
                    <Field name="diagnosis" label="Ташхис" placeholder="Ташхис" span={24} required textarea />
                    <Field name="guiltyFullName" label="Айибдор шахс исим фамиляси" placeholder="Айибдор шахс исим фамиляси" span={24} required />
                    <Field name="violatedRule" label="Бузган қоидаси" placeholder="Бузган қоидаси" span={24} required />
                    <Field name="commissionProposal" label="Комиссия таклифи" placeholder="Комиссия таклифи" span={24} required />
                    <Field name="witnesses" label="Гувохлар" placeholder="Гувохлар" span={24} required />
                </Form>
            </Box>
        </>
    );
};
