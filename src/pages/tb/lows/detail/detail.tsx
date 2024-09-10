import { Box, Card, Form, Typography } from '@/components';
import { createDocumentMutation, updateDocumentMutation, useDocumentQuery } from '@/lib/services';
import { generateDate } from '@/lib/utils';
import { IDocumentPayload } from '@/types/documents';
import { Form as AntdForm, Col, DatePicker, Input } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export const DocumentDetail = () => {
    const [form] = AntdForm.useForm<IDocumentPayload>();
    const { id } = useParams();
    const { mutateAsync: create } = createDocumentMutation();
    const { mutateAsync: update } = updateDocumentMutation();

    const { data, isLoading, isRefetching } = useDocumentQuery(id as string);

    useEffect(() => {
        form.setFieldValue('name', data?.name);
        form.setFieldValue('year', dayjs(data?.year as string));
        form.setFieldValue('devision', data?.devision);
        form.setFieldValue('storage_space', data?.storage_space);
    }, [data]);

    const onFinish = (value: IDocumentPayload) => {
        if (value.year) {
            value.year = generateDate(value.year);
        }

        if (id) {
            update({ id, body: value });
        } else {
            create(value);
        }
    };

    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Typography type="text">Хужжат яратиш</Typography>
            </Box>
            <Card>
                <Form loading={isLoading || isRefetching} form={form} onFinish={onFinish}>
                    <Col span={24}>
                        <AntdForm.Item required={true} label="Хужжат номи" name="name">
                            <Input placeholder="Хужжат номи" />
                        </AntdForm.Item>
                    </Col>
                    <Col span={24}>
                        <AntdForm.Item required={true} label="Санаси" name="year">
                            <DatePicker style={{ width: '100%' }} placeholder="Санаси" />
                        </AntdForm.Item>
                    </Col>
                    <Col span={24}>
                        <AntdForm.Item name="devision" required={true} label="СХММваЭ департаменти таркибий бўлинмаси">
                            <Input placeholder="СХММваЭ департаменти таркибий бўлинмаси" />
                        </AntdForm.Item>
                    </Col>
                    <Col span={24}>
                        <AntdForm.Item name="storage_space" required={true} label="Сақлаш жойи (электрон шаклида)">
                            <Input placeholder="Сақлаш жойи (электрон шаклида)" />
                        </AntdForm.Item>
                    </Col>
                </Form>
            </Card>
        </Fragment>
    );
};
