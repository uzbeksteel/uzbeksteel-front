import { Box, Field, Form } from '@/components';
import { DatePicker, Form as AntdForm, Select, Skeleton } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import { useGetGraphicByIdQuery, useUpdateGraphicQuery } from '@/lib/services/queries/graphic.ts';
import { getAllWorkshopsQuery } from '@/lib/services';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { IUpdateGraphic } from '@/types/graphics.ts';
import { useModalStore } from '@/store';
import { modalIds } from '@/components/calendar/constants.ts';

export const Content = () => {
    const [form] = AntdForm.useForm<IUpdateGraphic>();
    const [searchParams] = useSearchParams();
    const { data: workshops } = getAllWorkshopsQuery();
    const { data: updateGraphicCredentials, isFetched: isUpdateGraphicCredentialsFetched } = useGetGraphicByIdQuery(searchParams.get('graphicId')!);
    const { mutate } = useUpdateGraphicQuery();
    const { closeModal } = useModalStore();

    useEffect(() => {
        if (isUpdateGraphicCredentialsFetched) {
            const initialValues = {
                ...updateGraphicCredentials,
                date: dayjs(updateGraphicCredentials?.date),
                submissionDate: updateGraphicCredentials?.submissionDate && dayjs(updateGraphicCredentials?.submissionDate),
            } as IUpdateGraphic;
            initialValues.workshop = initialValues.workshop.ref_key as never;
            form.setFieldsValue(initialValues);
        }
    }, [form, updateGraphicCredentials]);
    const getUpdatedFields = (currentValues: IUpdateGraphic, initialValues: IUpdateGraphic) => {
        return (Object.keys(currentValues) as Array<keyof IUpdateGraphic>).reduce((acc, key) => {
            if (currentValues[key] !== initialValues[key]) {
                // @ts-ignore
                acc[key] = currentValues[key];
            }
            return acc;
        }, {} as Partial<IUpdateGraphic>);
    };

    const onFinish = (values: IUpdateGraphic) => {
        const initialValues = {
            ...updateGraphicCredentials,
            date: dayjs(updateGraphicCredentials?.date),
            submissionDate: updateGraphicCredentials?.submissionDate && dayjs(updateGraphicCredentials?.submissionDate),
        } as IUpdateGraphic;
        const updatedFields = getUpdatedFields(values, initialValues);
        mutate({ ...updatedFields, id: updateGraphicCredentials?.id });
    };

    return isUpdateGraphicCredentialsFetched ? (
        <Form form={form} onFinish={onFinish} onCancel={() => closeModal(modalIds.update)}>
            <Field span={24} name="date" label="Сана" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <DatePicker style={{ borderRadius: 0, width: '100%' }} />
            </Field>
            <Field label="Цех" span={24} name="workshop" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <Select>
                    {workshops.map((workshop) => (
                        <Select.Option key={workshop.id} value={workshop.ref_key}>
                            {workshop.name}
                        </Select.Option>
                    ))}
                </Select>
            </Field>
            <Field span={24} name="inspection" label="Текширув" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <TextArea style={{ borderRadius: 0, width: '100%' }} />
            </Field>
            <Field span={24} name="submissionDate" label="Чора тадбир ва хисоботни топшириш санаси" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <DatePicker placeholder="Чора тадбир ва хисоботни топшириш санаси" style={{ borderRadius: 0, width: '100%' }} />
            </Field>
        </Form>
    ) : (
        <Box $direction="column" $gap="15px">
            <Skeleton.Input style={{ width: '100%' }} />
            <Skeleton.Input style={{ width: '100%' }} />
            <Skeleton.Input style={{ width: '100%' }} />
            <Skeleton.Input style={{ width: '100%' }} />
        </Box>
    );
};
