import { Box, Button, Icon, Select, Typography } from '@/components';
import { getWorkShopBranchesByRefQuery, selectableWShEmpoyesQuery } from '@/lib/services';
import { useAppStore } from '@/store';
import { Card, Col, Form, Radio, Row } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const CreateWorkshopBranchesForm = () => {
    const { id } = useParams();
    const [ref, setRef] = useState<string>();
    const { setIsModal } = useAppStore();

    const { data, isLoading } = getWorkShopBranchesByRefQuery(id as string);
    const { data: employeeData, isLoading: employeeLoading } = selectableWShEmpoyesQuery(ref as string);

    return (
        <Box $m="10px 24px">
            <Card style={{ width: '100%' }}>
                <Form layout="vertical" style={{ width: '100%' }}>
                    <Row gutter={[10, 10]}>
                        <Col span={24}>
                            <Form.Item label="Бўлим номи:" name="branch_name" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Бўлим номи"
                                    options={data?.map((v) => ({ label: v.Description, value: v.Ref_Key }))}
                                    showSearch={true}
                                    loading={isLoading}
                                    onChange={(value: any) => {
                                        setRef(value);
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Typography type="paragraph">Добавить мастера</Typography>
                        </Col>
                        <Col span={24}>
                            <Form.List name="masters">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map((subField, i) => (
                                            <Card size="small" key={i} title={`${subField.key + 1}. Мастер`} extra={<Icon btn={false} name="BadgeX" onClick={() => remove(subField.name)} />} style={{ marginTop: '10px' }}>
                                                <Row gutter={10}>
                                                    <Col span={24}>
                                                        <Form.Item label="Мастер:" name="master" rules={[{ required: true }]}>
                                                            {employeeData && employeeData.length !== 0 ? (
                                                                <Select placeholder="Мастер" options={employeeData?.map((v) => ({ label: v.ishchi, value: v.tabNomer }))} showSearch={true} loading={employeeLoading} />
                                                            ) : (
                                                                <Button style={{ width: '100%' }} onClick={() => setIsModal(true)}>
                                                                    Добавить сотрудника +{' '}
                                                                </Button>
                                                            )}
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Form.Item label="Тип мастера" name="master_type" rules={[{ required: true }]}>
                                                            <Radio.Group onChange={() => {}} value={1}>
                                                                <Radio value={1}>Мастер</Radio>
                                                                <Radio value={2}>Старший мастер</Radio>
                                                            </Radio.Group>
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        ))}
                                        <Button disabled={ref ? false : true} type="dashed" style={{ width: '100%', marginTop: '10px' }} onClick={() => add()} icon={<Icon name="UserPlus" />} />
                                    </>
                                )}
                            </Form.List>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Box>
    );
};
