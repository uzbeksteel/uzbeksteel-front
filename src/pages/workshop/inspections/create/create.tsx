import { Box, Card, Field, Icon, Typography } from '@/components';
import { generateSelectOptions } from '@/lib/helper';
import { createMagazineMutation, getUsersQuery } from '@/lib/services';
import { useMagazineStore } from '@/store';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { CreateMagazineBody } from './type';

export const InspectionCreate = () => {
    const { stage } = useMagazineStore();
    const navigate = useNavigate();
    const { mutate } = createMagazineMutation();

    const { data: users, isFetching, isPending } = getUsersQuery();

    const onFinissh = (value: CreateMagazineBody) => {
        const opt = { ...value, magazine_type: stage, signature: false, workshop: '870573ec-3cfc-4474-b2bb-60fd5af50cc5', workshop_branches: '931790b6-42ff-49d2-8080-498d58823b27' } as CreateMagazineBody;
        mutate(opt);
    };

    const userOption = generateSelectOptions(users, 'first_name', 'id');

    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Текширув яратиш
                </Typography>
            </Box>
            <Box $p="20px" $gap="10px">
                <Card>
                    <Form onFinish={onFinissh} layout="vertical">
                        <Row gutter={[10, 10]}>
                            <Field span={24} name="control_date" label="Назоратни ўтказиш санаси:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <DatePicker style={{ width: '100%' }} />
                            </Field>
                            <Field span={24} name="responsibles" label="Вакиллар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Select mode="multiple" loading={isFetching} options={userOption} />
                            </Field>

                            <Field span={24} name="omissions" label="Камчилик ва бузилишлар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Input.TextArea />
                            </Field>

                            <Field span={24} name="measures" label="Чора-тадбирлар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Input.TextArea />
                            </Field>

                            <Field span={24} name="commissions" label="Ижроси учун жавобгар шахслар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Select mode="multiple" loading={isFetching} options={userOption} />
                            </Field>

                            <Field span={24} name="complate_date" label="Бажариш муддати:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <DatePicker style={{ width: '100%' }} />
                            </Field>

                            <Col span={24}>
                                <Button loading={isPending} htmlType="submit" type="primary" style={{ width: '100%' }}>
                                    Сақлаш
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Box>
        </Fragment>
    );
};
