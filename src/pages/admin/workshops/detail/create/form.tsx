import { Box, Button, Icon, Select, Typography } from '@/components';
import { dictionary } from '@/constants';
import { getWorkShopBranchesByRefQuery, selectableWShEmpoyesQuery, useWorkshopBranchesMuation } from '@/lib/services';
import { useAppStore } from '@/store';
import { useIsMutating } from '@tanstack/react-query';
import { Card, Col, Form, Radio, Row } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const CreateWorkshopBranchesForm = () => {
    const { id } = useParams();
    const [ref, setRef] = useState<string>();
    const { setIsModal } = useAppStore();
    const isMutating = useIsMutating();

    const { data, isLoading } = getWorkShopBranchesByRefQuery(id as string);
    const { data: employeeData, isLoading: employeeLoading } = selectableWShEmpoyesQuery(ref as string);

    const { mutateAsync: CreateWorkshopBranch } = useWorkshopBranchesMuation();

    const onFinish = (v: any) => {
        CreateWorkshopBranch(v);
    };

    return (
        <Box $m="10px 24px">
            <Card style={{ width: '100%' }}>
                <Form layout="vertical" style={{ width: '100%' }} onFinish={onFinish}>
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
                                {(fields, { add, remove }, { errors }) => (
                                    <>
                                        {fields.map((subField) => (
                                            <Card size="small" key={subField.name} title={`${subField.name + 1}. Мастер`} extra={<Icon btn={false} name="BadgeX" onClick={() => remove(subField.name)} />} style={{ marginTop: '10px' }}>
                                                <Row gutter={10}>
                                                    <Col span={24}>
                                                        <Form.Item label="Тип мастера" name={[subField.name, 'master_type']} rules={[{ required: true }]}>
                                                            <Radio.Group>
                                                                <Radio value={1}>Мастер</Radio>
                                                                <Radio value={2}>Старший мастер</Radio>
                                                            </Radio.Group>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Form.Item label="Мастер:" name={[subField.name, 'master']} rules={[{ required: true }]}>
                                                            <Select placeholder="Мастер" options={employeeData?.map((v) => ({ label: v.ishchi, value: v.tabNomer }))} showSearch={true} loading={employeeLoading} />
                                                        </Form.Item>
                                                        {/* <Form.Item>
                                                            <Button type="primary" style={{ width: '100%' }} onClick={() => setIsModal(true)}>
                                                                Добавить сотрудника +
                                                            </Button>
                                                        </Form.Item> */}
                                                    </Col>
                                                </Row>
                                            </Card>
                                        ))}
                                        <Button disabled={ref ? false : true} type="dashed" style={{ width: '100%', marginTop: '10px' }} onClick={() => add()} icon={<Icon name="UserPlus" />} />
                                        <Form.ErrorList errors={errors} />
                                    </>
                                )}
                            </Form.List>
                        </Col>
                    </Row>
                    <Box $gap="10px" $justify="end" $mt="20px">
                        <Button htmlType="submit" type="primary" loading={!!isMutating} disabled={!!isMutating} style={{ background: 'white', color: '#d5680a', border: '1px solid ' }}>
                            {dictionary.cancel}
                        </Button>
                        <Button htmlType="submit" type="primary" loading={!!isMutating} disabled={!!isMutating}>
                            {dictionary.save}
                        </Button>
                    </Box>
                </Form>
            </Card>
        </Box>
    );
};
