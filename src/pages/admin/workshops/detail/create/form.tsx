import { Field, Icon, Select } from '@/components';
import { Button, Card, Col, Form, Radio, Row } from 'antd';

export const CreateWorkshopBranchesForm = () => {
    return (
        <Form layout="vertical">
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Form.Item label="Бўлим номи:" name="branch_name" rules={[{ required: true }]}>
                        <Select placeholder="Бўлим номи" options={[]} showSearch={true} />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.List name="masters">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((subField, i) => (
                                    <Card size="small" key={i} title={`${subField.key + 1}. Бўлим номи`} extra={<Button onClick={() => remove(subField.name)} icon={<Icon name="BadgeX" />} />}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <Form.Item>
                                                    <Form.Item label="Бўлим номи:" name="branch_name" rules={[{ required: true }]}>
                                                        <Select placeholder="Бўлим номи" options={[]} showSearch={true} />
                                                    </Form.Item>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}
                                <Button type="dashed" style={{ width: '100%' }} onClick={() => add()} icon={<Icon name="UserPlus" />} />
                            </>
                        )}
                    </Form.List>
                </Col>
            </Row>

            <Field span={24} label="Мастер:" name="master" required={true}>
                <Select placeholder="Мастер" options={[]} showSearch={true} />
            </Field>
            <Field span={24} label="Тип мастера" name="name" required={true}>
                <Radio.Group onChange={() => {}} value={1}>
                    <Radio value={1}>Мастер</Radio>
                    <Radio value={2}>Старший мастер</Radio>
                </Radio.Group>
            </Field>
        </Form>
    );
};
