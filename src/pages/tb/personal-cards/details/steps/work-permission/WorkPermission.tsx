import { Box, Loading } from '@/components';
import { UserRoles } from '@/constants';
import { useGetWorkPermissionQuery } from '@/lib/services';
import { checkRole, dateFormatter } from '@/lib/utils';
import { Checkbox, Col, Row, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Content } from '../../components';

export const WorkPermission = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetWorkPermissionQuery(id!);
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />;
    }
    const { Text, Title } = Typography;
    const isPermission = checkRole(UserRoles.DIRECTOR);

    return (
        <Content
            title="Ишлашга рухсат бериш"
            editable={isPermission}
            onclick={() => {
                navigate('add');
            }}
        >
            <Box
                $justify="space-between"
                $p="20px"
                $align="end"
                $m="10px"
                style={{
                    background: '#fff',
                    boxShadow: '0px 0px 1px #E5E5E5',
                }}
            >
                <Box $direction="column" $gap="10px">
                    <Title level={4} style={{ color: '#333' }}>
                        4. Ишлашга рухсат бериш № {data?.order_number || '_________'}
                    </Title>
                    <Text style={{ color: '#333', fontSize: '14px' }}>
                        Проверкой знаний утов.{' '}
                        <Text strong style={{ color: '#ff7f00' }}>
                            {data?.fullName || '_______________'}
                        </Text>{' '}
                        установлено, что правила и инструкции по технике безопасности по выполняемой работе усвоил
                    </Text>
                    <br />
                    <Text style={{ color: '#333', fontSize: '14px' }}>
                        Разрешается допустить его к самостоятельной работе в качестве
                        <Text strong style={{ color: '#ff7f00' }}>
                            &nbsp;{data?.status || '_______________'} &nbsp;{data?.permission_work_date ? dateFormatter(data.permission_work_date) : '__ __ _____'}.
                        </Text>
                    </Text>
                    <br />
                    <br />
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#ff7f00', fontSize: '14px' }}>
                                Начальник цеха (уч-ка):
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox style={{ color: '#333' }} checked={data?.workshop_director_signature || false}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#ff7f00', fontSize: '14px' }}>
                                Мастер (начальник смены):
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox checked={data?.master_signature || false} style={{ color: '#333' }}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#ff7f00', fontSize: '14px' }}>
                                Общественный инспектор:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox checked={data?.inpector_signature || false} style={{ color: '#333' }}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#ff7f00', fontSize: '14px' }}>
                                Обучающее лицо:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox checked={data?.teacher_signature || false} style={{ color: '#333' }}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                </Box>
            </Box>
        </Content>
    );
};
