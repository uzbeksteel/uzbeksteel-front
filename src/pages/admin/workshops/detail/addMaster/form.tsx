import { DatePicker, Form as AntdForm, Input } from 'antd';
import { Box, Field, Form, Select } from '@/components';
import { getUser1CByTabNumberQuery, getWorkShopBranchesByRefQuery, useAddWorkshopBranchMasterMutation, useProfessionsQuery } from '@/lib/services';
import { generateSelectOptions } from '@/lib/helper';
import styled from 'styled-components';
import { useDebounce } from '@/lib/hooks';
import { useAppStore, useAuthStore } from '@/store';
import { useEffect } from 'react';
import { IWorkshopBranchUser } from '@/types/workshop.ts';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { UserTypes } from '@/constants';
import { dictionary } from '@/pages/admin/workshops/dictionary.ts';

const StyledAddOnInput = styled(Input)`
    .ant-input-group-addon {
        border-radius: 0;
    }
`;

export const AddMasterForm = () => {
    const { id } = useParams();
    const [form] = AntdForm.useForm<Omit<IWorkshopBranchUser, 'workshopRefKey'>>();
    const { onSearch } = useDebounce();
    const { search } = useAppStore();
    const { data: professions, isLoading: isProfessionsLoading } = useProfessionsQuery();
    const { data: user } = getUser1CByTabNumberQuery(search);
    const { data: workshopBranches, isLoading: isWBLoading } = getWorkShopBranchesByRefQuery(id!);
    const { mutate: addUser } = useAddWorkshopBranchMasterMutation();
    const { user: loginUser } = useAuthStore();
    const userTypesOption = Object.keys(UserTypes).map((el) => ({ value: el, label: dictionary.options[el as UserTypes] }));
    console.log(loginUser);
    useEffect(() => {
        if (user?.ishchi) {
            const fullName = user.ishchi.split(' ');
            const [day, month, year] = user.tugilganSana.split(' ')[0].split('.').map(Number);
            form.setFieldsValue({
                name: fullName[1],
                surname: fullName[0],
                bornPlace: user.tugilganJoyi.trim(),
                position: user.lavozim.trim(),
                phoneNumber: user.telefon.trim().slice(-7),
                password: user.telefon.trim(),
                birthDate: dayjs(new Date(year, month - 1, day)),
            });
        }
    }, [user]);
    const onFinish = (data: Omit<IWorkshopBranchUser, 'workshopRefKey'>) => {
        addUser({ ...data, workshopRefKey: id! });
    };
    return (
        <Box $direction="column" $m="20px">
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', backgroundColor: '#FFF' }}>
                {!!workshopBranches?.length && (
                    <Field name="workshopBranchRefKey" isRequired span={24} label="Цех бўлими">
                        <Select placeholder="Цех бўлими" options={generateSelectOptions(workshopBranches, 'Description', 'Ref_Key')} loading={isWBLoading} />
                    </Field>
                )}
                <Field onChange={onSearch} name="tabNumber" isRequired span={24} label="Таб номер" placeholder="Таб номер" />
                <Field name="name" isRequired span={24} label="Исм" placeholder="Исм" />
                <Field name="surname" isRequired span={24} label="Фамиля" placeholder="Фамиля" />
                <Field name="password" isRequired span={24} label="Парол">
                    <Input.Password placeholder="Парол" />
                </Field>
                <Field name="position" isRequired span={24} label="Лавозим">
                    <Select placeholder="Лавозим" options={generateSelectOptions(professions, 'name', 'id')} loading={isProfessionsLoading} />
                </Field>
                <Field span={24} name="birthDate" label="Туғилган санаси" isRequired>
                    <DatePicker placeholder="Туғилган санаси" style={{ borderRadius: 0, width: '100%' }} />
                </Field>
                <Field name="bornPlace" isRequired span={24} label="Туғилган жойи" placeholder="Туғилган жойи" />
                <Field name="userType" isRequired span={24} label="Ходим тури">
                    <Select placeholder="Ходим тури" options={userTypesOption} loading={isProfessionsLoading} />
                </Field>
                <AntdForm.Item name="phoneNumber" label="Ходим тури" required style={{ width: '100%' }}>
                    <StyledAddOnInput addonBefore="+998" placeholder="Телефон рақами" />
                </AntdForm.Item>
            </Form>
        </Box>
    );
};
