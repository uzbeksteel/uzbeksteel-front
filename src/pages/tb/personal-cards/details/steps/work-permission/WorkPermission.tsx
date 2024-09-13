import { Box } from '@/components';
import { Checkbox, Col, Row, Typography } from 'antd';
import { Content } from '../../components';

export const WorkPermission = () => {
    const { Text, Title } = Typography;
    return (
        <Content title="Ишлашга рухсат бериш">
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
                        4. Ишлашга рухсат бериш №1324
                    </Title>
                    <Text style={{ color: '#333', fontSize: '14px' }}>
                        Проверкой знаний утов.{' '}
                        <Text strong style={{ color: '#ff7f00' }}>
                            ISHCHI_ISM_FAMILYASI
                        </Text>{' '}
                        установлено, что правила и инструкции по технике безопасности по выполняемой работе усвоил
                        <Text strong style={{ color: '#ff7f00' }}>
                            {' '}
                            BAXOSI
                        </Text>
                    </Text>
                    <br />
                    <Text style={{ color: '#333', fontSize: '14px' }}>
                        Разрешается допустить его к самостоятельной работе в качестве
                        <Text strong style={{ color: '#ff7f00' }}>
                            YAXSHI 06.07.2024.
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
                            <Checkbox style={{ color: '#333' }}>Имзоси</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#ff7f00', fontSize: '14px' }}>
                                Мастер (начальник смены):
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox style={{ color: '#333' }}>Имзоси</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#ff7f00', fontSize: '14px' }}>
                                Общественный инспектор:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox style={{ color: '#333' }}>Имзоси</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#ff7f00', fontSize: '14px' }}>
                                Обучающее лицо:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox style={{ color: '#333' }}>Имзоси</Checkbox>
                        </Col>
                    </Row>
                </Box>
            </Box>
        </Content>
    );
};
