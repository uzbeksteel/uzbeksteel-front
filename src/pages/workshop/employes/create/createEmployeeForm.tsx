import { Box, Field, Form, Select } from '@/components';
import { DatePicker, Form as AntdForm, Input } from 'antd';
import { generateSelectOptions } from '@/lib/helper';
import { CreateUserBody } from '@/types/users.ts';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { getUser1CByTabNumberQuery, useProfessionsQuery } from '@/lib/services';
import { useAppStore } from '@/store';
import { useDebounce } from '@/lib/hooks';
import { UserTypes } from '@/constants';
import { dictionary } from '@/pages/admin/workshops/dictionary.ts';
import styled from 'styled-components';
import { useCreateUserMutation } from '@/lib/services/mutations/user.ts';

const StyledAddOnInput = styled(Input)`
    .ant-input-group-addon {
        border-radius: 0;
    }
`;

export const CreateEmployeeForm = () => {
    const [form] = AntdForm.useForm<CreateUserBody>();
    const { onSearch } = useDebounce();
    const { search } = useAppStore();
    const { data: user } = getUser1CByTabNumberQuery(search);
    const { data: professions, isLoading: isProfessionsLoading } = useProfessionsQuery();
    const { mutate: createUser } = useCreateUserMutation();

    const userTypesOption = Object.keys(UserTypes).map((el) => ({ value: el, label: dictionary.options[el as UserTypes] }));

    useEffect(() => {
        if (user?.ishchi) {
            const fullName = user.ishchi.split(' ');
            const [day, month, year] = user.tugilganSana.split(' ')[0].split('.').map(Number);
            form.setFieldsValue({
                first_name: fullName[1],
                last_name: fullName[0],
                place_of_birth: user.tugilganJoyi.trim(),
                position: user.lavozim.trim(),
                phone: user.telefon.trim().slice(-9),
                password: user.telefon.trim(),
                nationality: user.millati.trim(),
                birth_date: dayjs(new Date(year, month - 1, day)),
            });
        }
    }, [user]);
    const onFinish = (data: CreateUserBody) => {
        createUser(data);
    };
    return (
        <Box $direction="column" $m="20px">
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', backgroundColor: '#FFF' }}>
                <Field onChange={onSearch} name="tab_number" isRequired span={24} label="Таб номер" placeholder="Таб номер" />
                <Field name="first_name" isRequired span={24} label="Исм" placeholder="Исм" />
                <Field name="last_name" isRequired span={24} label="Фамиля" placeholder="Фамиля" />
                <Field name="nationality" isRequired span={24} label="Миллатти" placeholder="Миллатти" />
                <Field name="password" isRequired span={24} label="Парол">
                    <Input.Password placeholder="Парол" />
                </Field>
                <Field name="position" isRequired span={24} label="Лавозим">
                    <Select placeholder="Лавозим" options={generateSelectOptions(professions, 'name', 'id')} loading={isProfessionsLoading} />
                </Field>
                <Field span={24} name="birth_date" label="Туғилган санаси" isRequired>
                    <DatePicker placeholder="Туғилган санаси" style={{ borderRadius: 0, width: '100%' }} />
                </Field>
                <Field name="place_of_birth" isRequired span={24} label="Туғилган жойи" placeholder="Туғилган жойи" />
                <Field name="userType" isRequired span={24} label="Ходим тури">
                    <Select placeholder="Ходим тури" options={userTypesOption} loading={isProfessionsLoading} />
                </Field>
                <AntdForm.Item name="phone" label="Телефон рақами" required style={{ width: '100%' }}>
                    <StyledAddOnInput addonBefore="+998" placeholder="Телефон рақами" />
                </AntdForm.Item>
            </Form>
        </Box>
    );
};
