import { Box, Loading } from '@/components';
import { useGetOrderQuery } from '@/lib/services';
import { dateFormatter } from '@/lib/utils';
import { Checkbox, Col, Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { Content } from '../../components';

export const OrderReport = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetOrderQuery(id!);

    if (isLoading) {
        return <Loading />;
    }

    const { Text, Link } = Typography;
    return (
        <Content title="Буйруқ" editable={false}>
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
                    <Text>
                        3. Буйруқ, № <span style={{ color: '#F08D10' }}>{data?.order_number || '_______'}</span>
                    </Text>
                    <Text>
                        По <Link style={{ color: '#F08D10' }}>{data?.workshop?.name || '____________'}</Link> цеху (уч-ку) от <Text strong> {data?.start_date_of_internship ? dateFormatter(data?.start_date_of_internship as string) : '_ ___ __'}</Text>. Вновь поступившего в цех (на уч-к) тов.
                        <Text strong style={{ color: '#F08D10' }}>
                            {' '}
                            {data?.fullName || '___________'}{' '}
                        </Text>
                        зачислить в качестве
                        <Text strong style={{ color: '#F08D10' }}>
                            {' '}
                            {data?.profession?.name || '________'}{' '}
                        </Text>
                        с
                        <Text strong style={{ color: '#F08D10' }}>
                            {' '}
                            {data?.date ? dateFormatter(data?.date) : '__________'}
                        </Text>
                        . Сроком на
                        <Text strong style={{ color: '#F08D10' }}>
                            {' '}
                            {data?.internship_duration || '____'}{' '}
                        </Text>
                        дней (на период обучения).
                    </Text>
                    <Text>
                        Для приобретения производственных навыков вновь принятого товарища{' '}
                        <Text strong style={{ color: '#F08D10' }}>
                            {' '}
                            {data?.name_of_attached_person || '_________'}{' '}
                        </Text>
                        (должность, фамилия) закрепить за
                        <Text style={{ color: '#F08D10' }} strong>
                            {' '}
                            {data?.position_of_attached_person || '___________'}{' '}
                        </Text>
                    </Text>
                    <Text>
                        Нач-ку участка (прорабу, мастеру) <Link style={{ color: '#F08D10' }}>{data?.author_of_intership || '__________________'}</Link> обеспечить обучение на рабочем месте и контроль за соблюдением правил и инструкций по технике безопасности.
                    </Text>
                    <br />
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Цех бошлиғининг имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox checked={data?.workshop_director_signature || false} disabled={true}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Мастер имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox checked={data?.master_signature || false} disabled={true}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Ўқитган шахс имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox checked={data?.teacher_signature || false} disabled={true}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Text strong style={{ color: '#F08D10' }}>
                                Ишчи имзоси:
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Checkbox checked={data?.employer_signature || false} disabled={true}>
                                Имзоси
                            </Checkbox>
                        </Col>
                    </Row>
                </Box>
            </Box>
        </Content>
    );
};
