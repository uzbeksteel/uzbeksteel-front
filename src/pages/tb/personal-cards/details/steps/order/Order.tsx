import { Box } from '@/components';
import { Checkbox, Col, Row, Typography } from 'antd';
import { Content } from '../../components';

export const OrderReport = () => {
    const { Text, Link } = Typography;
    return (
        <Content title="Буйруқ">
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
                <Box $direction="column" $gap="20px">
                    <Text>3. Буйруқ, №1324</Text>
                    <Text>
                        По <Link style={{ color: '#F08D10' }}>TSEX_NOMI</Link> цеху (уч-ку) от <Text strong>01.02.2012</Text>. Вновь поступившего в цех (на уч-к) тов.
                        <Text strong style={{ color: '#F08D10' }}>
                            ISM_FAMILYA
                        </Text>
                        зачислить в качестве
                        <Text strong style={{ color: '#F08D10' }}>
                            KASBI
                        </Text>
                        с
                        <Text strong style={{ color: '#F08D10' }}>
                            19.11.20
                        </Text>
                        . Сроком на
                        <Text strong style={{ color: '#F08D10' }}>
                            31
                        </Text>
                        дней (на период обучения).
                    </Text>
                    <Text>
                        Для приобретения производственных навыков вновь принятого товарища{' '}
                        <Text strong style={{ color: '#F08D10' }}>
                            BIRIKTIRILGAN_SHAXS_ISMI
                        </Text>
                        (должность, фамилия) закрепить за
                        <Text style={{ color: '#F08D10' }} strong>
                            BIRIKTIRILGAN_SHAXS_LAVOZIMI
                        </Text>
                    </Text>
                    <Text>
                        Нач-ку участка (прорабу, мастеру) <Link style={{ color: '#F08D10' }}>stajirovka_otkazishni_taminlovchi_shaxs</Link> обеспечить обучение на рабочем месте и контроль за соблюдением правил и инструкций по технике безопасности.
                    </Text>
                    <br />
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Цех бошлиғининг имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox>Имзоси</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Мастер имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox>Имзоси</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Ўқитган шахс имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox>Имзоси</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Ишчи имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox>Имзоси</Checkbox>
                        </Col>
                    </Row>
                </Box>
            </Box>
        </Content>
    );
};
