import { Box, Button, Select } from '@/components';
import { dictionary } from '@/constants';
import { getWorkShopBranchesByRefQuery, useWorkshopBranchesMutation } from '@/lib/services';
import { useIsMutating } from '@tanstack/react-query';
import { Card, Col, Form, Row } from 'antd';
import { useParams } from 'react-router-dom';

export const CreateWorkshopBranchesForm = () => {
    const { id } = useParams();
    const isMutating = useIsMutating();

    const { data, isLoading } = getWorkShopBranchesByRefQuery(id as string);

    const { mutateAsync: CreateWorkshopBranch } = useWorkshopBranchesMutation();

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
                                <Select placeholder="Бўлим номи" options={data?.map((v) => ({ label: v.Description, value: v.Ref_Key }))} showSearch={true} loading={isLoading} />
                            </Form.Item>
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
