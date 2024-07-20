import { Box, Field, Icon, Typography } from '@/components';
import { Button, Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export const InspectionCreate = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Текширув яратиш
                </Typography>
            </Box>
            <Box $p="20px" $gap="10px">
                <Form layout="vertical">
                    <Row gutter={[10, 10]}>
                        <Field span={24} name="date" label="Назоратни ўтказиш санаси:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Field>
                        <Field span={24} name="representative" label="Вакил:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                            <Input />
                        </Field>

                        <Field span={24} name="description" label="Камчилик ва бузилишлар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                            <Input.TextArea />
                        </Field>

                        <Field span={24} name="measures" label="Чора-тадбирлар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                            <Input.TextArea />
                        </Field>

                        <Field span={24} name="responsible" label="Ижроси учун жавобгар шахслар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                            <Select />
                        </Field>

                        <Field span={24} name="date_end" label="Бажариш муддати:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Field>

                        <Field span={24} name="sgnature" label="Бажарилганлиги  бўйича белги (сана,бажаришга жавобгар шахс ва меҳнат муҳофазаси бўйича вакил имзоси):" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                            <Checkbox />
                        </Field>
                        <Col span={24}>
                            <Button type="primary" style={{ width: '100%' }}>
                                Сақлаш
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Box>
        </Fragment>
    );
};
