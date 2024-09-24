import { Box, Field, Form, Loading, PageHeader, Select } from '@/components';
import { getAllWorkshopsQuery, useGetOrderQuery, useProfessionsQuery } from '@/lib/services';
import { createOrderMutation } from '@/lib/services/mutations/order';
import { IOrderBody } from '@/types/order';
import { Checkbox, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MutateOrderReport = () => {
    const [form] = useForm();
    const { id } = useParams();
    const { data, isLoading } = useGetOrderQuery(id!);
    const { data: professions, isPending } = useProfessionsQuery();
    const { data: workshops, isLoading: workshopLoading } = getAllWorkshopsQuery();
    const { mutateAsync } = createOrderMutation(id!);

    const onFinish = (values: IOrderBody) => {
        if (id) {
            mutateAsync({
                order_number: +values.order_number,
                workshop: values.workshop,
                start_date_of_internship: dayjs(values.start_date_of_internship),
                fullName: values.fullName,
                profession: values.profession,
                date: dayjs(values.date),
                internship_duration: +values.internship_duration,
                name_of_attached_person: values.name_of_attached_person,
                author_of_intership: values.author_of_intership,
                position_of_attached_person: values.position_of_attached_person,
                workshop_director_signature: values.workshop_director_signature,
                master_signature: values.master_signature,
                teacher_signature: values.teacher_signature,
                employer_signature: values.employer_signature,
                personalCard: id,
            });
        }
    };

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                order_number: data?.order_number,
                workshop: data?.workshop?.id,
                start_date_of_internship: dayjs(data?.start_date_of_internship),
                fullName: data?.fullName,
                profession: data?.profession?.id,
                date: dayjs(data?.date),
                internship_duration: data?.internship_duration,
                name_of_attached_person: data?.name_of_attached_person,
                author_of_intership: data?.author_of_intership,
                workshop_director_signature: data?.workshop_director_signature,
                master_signature: data?.master_signature,
                teacher_signature: data?.teacher_signature,
                employer_signature: data?.employer_signature,
            });
        }
    }, [data]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <PageHeader title={'3.Буйруқ'} />
            <Form form={form} onFinish={onFinish} style={{ padding: '20px', margin: '20px', backgroundColor: 'white' }}>
                <Field span={24} name={'order_number'} required label={'Буйруқ рақами '} placeholder="Буйруқ рақамини киритинг" />

                <Field span={24} name={'workshop'} required label={'Цех'} placeholder="Цехни танланг">
                    <Select placeholder={'Цехни танланг'} loading={workshopLoading} options={workshops.map((v) => ({ label: v.name, value: v.id }))} />
                </Field>

                <Field span={24} label={'Сана'} required name={'date'}>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Санани танланг" />
                </Field>

                <Field span={24} label={'Фамилия И.О.'} name={'fullName'} placeholder="Фамилия И.О." required />

                <Field span={24} name={'profession'} required label={'Касби'} placeholder="Касбини танланг">
                    <Select placeholder={'Касбини танланг'} options={professions?.map((v) => ({ label: v.name, value: v.id }))} loading={isPending} />
                </Field>

                <Field span={24} label={'Стажировкани бошлаш санаси'} required name={'start_date_of_internship'}>
                    <DatePicker style={{ borderRadius: 0, width: '100%' }} name="birth_date" placeholder="Стажировкани бошлаш санаси" />
                </Field>

                <Field span={24} name={'internship_duration'} label={'Стажировка давомийлиги.'} placeholder="Стажировка давомийлиги." required />

                <Field span={24} name={'position_of_attached_person'} required label={'Бириктирилган шахс лавозими'}>
                    <Select placeholder={'Бириктирилган шахс лавозими'} options={professions?.map((v) => ({ label: v.name, value: v.id }))} loading={isPending} />
                </Field>

                <Field span={24} label={'Бириктирилган шахс исим фамиляси'} name={'name_of_attached_person'} placeholder="Бириктирилган шахс исим фамиляси" required />

                <Field span={24} label={'Стажировка ўтказишни таминловчи шахс'} name={'author_of_intership'} placeholder="Стажировка ўтказишни таминловчи шахс" required />

                <Field span={24} name={'workshop_director_signature'} valuePropName="checked" required={false}>
                    <Box $justify="space-between">
                        <span>Цех бошлиғининг имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'master_signature'} valuePropName="checked" required={false}>
                    <Box $justify="space-between">
                        <span>Мастер имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'teacher_signature'} valuePropName="checked" required={false}>
                    <Box $justify="space-between">
                        <span>Ўқитган шахс имзоси: </span>
                        <Box $gap="10px">
                            <Checkbox />
                            <span>Имзоси</span>
                        </Box>
                    </Box>
                </Field>

                <Field span={24} name={'employer_signature'} valuePropName="checked" required={false}>
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
