import { useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { DatePicker, Form as AntdForm } from 'antd';
import { Box, Field, Form, PageHeader } from '@/components';
import { IAccident, ICreateAccident } from '@/types/accident.ts';
import { createAccidentMutation } from '@/lib/services';
import { history } from '@/lib/utils';
import { ROUTES } from '@/constants';

export const AddAccident = () => {
    const { id } = useParams();
    const [form] = AntdForm.useForm<Omit<ICreateAccident, 'workshopId'>>();
    const { mutate } = createAccidentMutation(onSuccess);

    function onSuccess(data: IAccident) {
        history.push(`${ROUTES.workshopAccidents}/${data.id}/details`);
    }
    const onFinish = (data: Omit<ICreateAccident, 'workshopId'>) => {
        mutate({ ...data, workshopId: id! });
    };
    return (
        <Fragment>
            <PageHeader title="Бахтсиз ходиса яратиш" />
            <Box $p="20px" style={{ background: 'transparent' }}>
                <Form form={form} onFinish={onFinish} style={{ width: '100%', padding: 20, background: '#FFF' }}>
                    <Field name="accidentDate" label="Ҳодиса юз берган сана" span={24} required>
                        <DatePicker placeholder="Ҳодиса юз берган сана" style={{ borderRadius: '0', width: '100%' }} />
                    </Field>
                    <Field name="victimsNumber" label="Жабрланувчилар сони" placeholder="Жабрланувчилар сони" span={24} required isInputNumber />
                </Form>
            </Box>
        </Fragment>
    );
};
