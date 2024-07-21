import { useEffect } from 'react';
import { Field } from '@/components';
import { DatePicker, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs, { Dayjs } from 'dayjs';
import { useGraphicStore } from '@/store';
import { IGraphic } from '@/types/graphics.ts';
import { useUpdateGraphicQuery } from '@/lib/services/queries/graphic.ts';
import { modal } from '@/app';

type IUpdateForm = Pick<IGraphic, 'workshop' | 'inspection'> & { date: Dayjs };

export const Content = () => {
    const [form] = Form.useForm<IUpdateForm>();
    const { setUpdateFormInstance, updateGraphicCredentials } = useGraphicStore();
    const { mutate } = useUpdateGraphicQuery(onSuccess);

    useEffect(() => {
        setUpdateFormInstance(form);
        const initialValues = {
            ...updateGraphicCredentials,
            date: dayjs(updateGraphicCredentials?.date),
        } as IUpdateForm;
        form.setFieldsValue(initialValues);
    }, [form, updateGraphicCredentials]);

    function onSuccess() {
        modal.success({
            title: 'Текширув янгилаш мувафақиятли амалга оширилди!',
        });
    }

    const getUpdatedFields = (currentValues: IUpdateForm, initialValues: IUpdateForm) => {
        return (Object.keys(currentValues) as Array<keyof IUpdateForm>).reduce((acc, key) => {
            if (currentValues[key] !== initialValues[key]) {
                // @ts-ignore
                acc[key] = currentValues[key];
            }
            return acc;
        }, {} as Partial<IUpdateForm>);
    };

    const onFinish = (values: IUpdateForm) => {
        const initialValues = {
            ...updateGraphicCredentials,
            date: dayjs(updateGraphicCredentials?.date),
        } as IUpdateForm;
        const updatedFields = getUpdatedFields(values, initialValues);
        mutate({ ...updatedFields, id: updateGraphicCredentials?.id });
    };

    return (
        <Form layout="vertical" form={form} onFinish={onFinish} requiredMark>
            <Field span={24} name="date" label="Сана" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <DatePicker style={{ borderRadius: 0, width: '100%' }} />
            </Field>
            <Field span={24} name="workshop" label="Цех" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]} />
            <Field span={24} name="inspection" label="Текширув" rules={[{ required: true, message: 'Тўлдирилиши шарт!' }]}>
                <TextArea style={{ borderRadius: 0, width: '100%' }} />
            </Field>
        </Form>
    );
};
