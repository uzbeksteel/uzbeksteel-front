import { DatePicker, Form as AntdForm } from 'antd';
import { Box, Checkbox, Field, Form, Select } from '@/components';
import { ICreateAccidentOrder } from '@/types/accident.ts';
import { createAccidentOrderMutation, getUsersQuery } from '@/lib/services';
import { getAllProfessionsQuery } from '@/lib/services/queries/profession.ts';
import { useSearchParams } from 'react-router-dom';

export const ExportForm = () => {
    const [form] = AntdForm.useForm<ICreateAccidentOrder>();
    const { data: users } = getUsersQuery();
    const { data: professions } = getAllProfessionsQuery();
    const { mutate } = createAccidentOrderMutation();
    const [searchParams] = useSearchParams();
    const accidentId = searchParams.get('accidentId') || '';
    const onFinish = (formData: Omit<ICreateAccidentOrder, 'accidentId'>) => {
        mutate({ ...formData, accidentId });
    };
    return (
        <Form form={form} onFinish={onFinish}>
            <Field name="orderShape" label="Буйруқ шакли" placeholder="Буйруқ шакли" span={24} required />
            <Field name="orderQuantity" label="Буйруқ сони" placeholder="Буйруқ сони" span={24} required />
            <Field name="orderDescription" label="Буйруқ нима тўғрисидалиги" placeholder="Буйруқ нима тўғрисидалиги" span={24} required />
            <Field name="notes" label="Изох" placeholder="Изох" span={24} required />
            <Field name="userId" label="Ишга қўювчи исм фамиляси" span={24} required>
                <Select placeholder="Ишга қўювчи исм фамиляси" options={users.map((el) => ({ value: el.id, label: el.first_name }))} />
            </Field>
            <Field name="professionId" label="Ишга қўювчи лавозими" span={24} required>
                <Select placeholder="Ишга қўювчи лавозими" options={professions.map((el) => ({ value: el.id, label: el.name }))} />
            </Field>
            <Field name="date" label="Сана" span={24} required>
                <DatePicker placeholder="Сана" style={{ borderRadius: '0', width: '100%' }} />
            </Field>
            <Field name="subscriberName" label="Аъзонинг исм фамлияси" placeholder="Аъзонинг исм фамлияси" span={24} required />
            <Field name="subscriberPosition" label="Лавозими" placeholder="Лавозими" span={24} required />
            <Field name="commissionRole" label="Комиссиядаги рўли" placeholder="Комиссиядаги рўли" span={24} required />
            <Box $direction="column" $gap="15px">
                <Checkbox valuePropName="checked" name="boardChairman" initialValue={false} label="Бошқарув райис" />
                <Checkbox valuePropName="checked" name="legalDepartmentDirector" initialValue={false} label="Юридик депортамент директори" />
                <Checkbox valuePropName="checked" name="industrialSafetyDirector" initialValue={false} label="Саноат хавфсизлиги директори" />
            </Box>
        </Form>
    );
};
