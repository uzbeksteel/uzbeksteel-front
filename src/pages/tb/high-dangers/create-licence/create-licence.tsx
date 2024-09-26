import { Fragment } from 'react/jsx-runtime';
import { Divider, Form as AntdForm } from 'antd';
import { AutoComplete, Box, Field, Form, PageHeader } from '@/components';
import { ICreateHighDangerLicence } from '@/types/high-dangers.ts';
import { createHighDangerLicenceMutation, getUsersQuery, useProfessionsQuery } from '@/lib/services';
import { generateSelectOptions } from '@/lib/helper';
import { useParams } from 'react-router-dom';

export const CreateHighDangerLicence = () => {
    const { id } = useParams();
    const [form] = AntdForm.useForm<Omit<ICreateHighDangerLicence, 'dangerId'>>();
    const { data: professions, isFetching: professionLoading } = useProfessionsQuery();
    const { data: users, isFetching: userLoading } = getUsersQuery();
    const { mutate } = createHighDangerLicenceMutation();

    const onFinish = (data: Omit<ICreateHighDangerLicence, 'dangerId'>) => {
        mutate({ ...data, dangerId: id! });
    };
    return (
        <Fragment>
            <PageHeader title="Рухсатнома яратиш" />
            <Box $p="20px" $direction="column" style={{ background: 'transparent' }}>
                <Form style={{ background: '#FFF', padding: 20 }} form={form} onFinish={onFinish}>
                    <Field name="masterPositionId" label="Устанинг лавозими" span={24} required>
                        <AutoComplete loading={professionLoading} placeholder="Устанинг лавозими" options={generateSelectOptions(professions || [], 'name', 'id')} />
                    </Field>
                    <Field name="masterFullName" label="Устаинг исим фамиляси" placeholder="Устаинг исим фамиляси" span={24} required />
                    <Field name="workPlace" label="Иш жойи" placeholder="Иш жойи" span={24} required />
                    <Field name="objectName" label="Ускуна ёки обектинг номи" placeholder="Ускуна ёки обектинг номи" span={24} required />
                    <Field name="workDescription" label="Иш ҳақида қисқача тасниф" placeholder="Иш ҳақида қисқача тасниф" span={24} required textarea />
                    <Field name="employerId" label="Ишга қўювчи исм фамиляси" span={24} required>
                        <AutoComplete loading={userLoading} placeholder="Ишга қўювчи исм фамиляси" options={generateSelectOptions(users || [], 'first_name', 'id')} />
                    </Field>
                    <Field name="employerPositionId" label="Ишга қўювчи исм фамиляси" span={24} required>
                        <AutoComplete loading={professionLoading} placeholder="Ишга қўювчи исм фамиляси" options={generateSelectOptions(professions || [], 'name', 'id')} />
                    </Field>
                    <Divider />
                    <Field name="shouldBeStopped" label="Тўхтатилсин" placeholder="Тўхтатилсин" span={24} required={false} />
                    <Field name="shouldBeDiscontinued" label="Узулсин" placeholder="Узулсин" span={24} required={false} />
                    <Field name="shouldBeInstalled" label="Ўрнатилсин" placeholder="Ўрнатилсин" span={24} required={false} />
                    <Field name="airSampling" label="Ҳава мухитидан намуна олиш" placeholder="Ҳава мухитидан намуна олиш" span={24} required={false} />
                    <Field name="shouldBeBlocked" label="Тўсилсин" placeholder="Тўсилсин" span={24} required={false} />
                    <Field name="heightSafetyMeasures" label="Баландликда ишлаганда хавфсизлик чоралари кўрилсин" placeholder="Баландликда ишлаганда хавфсизлик чоралари кўрилсин" span={24} required={false} />
                    <Field name="warning" label="Огохлантириш" placeholder="Огохлантириш" span={24} required={false} />
                    <Field name="insulationSafetyMeasures" label="Темирёл излари ёнида хавфсизлик чоралари кўрилсин" placeholder="Темирёл излари ёнида хавфсизлик чоралари кўрилсин" span={24} required={false} />
                    <Field name="workplaceLayouts" label="Иш ўринларига борадиган ёъналишлар кўрсатилсин" placeholder="Иш ўринларига борадиган ёъналишлар кўрсатилсин" span={24} required={false} />
                    <Field name="additionalMeasures" label="Қўшимча тадбирлар" placeholder="Қўшимча тадбирлар" span={24} required={false} />
                </Form>
            </Box>
        </Fragment>
    );
};
