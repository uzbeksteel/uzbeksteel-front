import { Box, Icon, Typography } from '@/components';
import { Button, Col, Row } from 'antd';
import { Fragment, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
    children: ReactNode;
}

export const Content = ({ title, children }: Props) => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    {title}
                </Typography>
                <Row style={{ marginLeft: 'auto' }} gutter={10}>
                    <Col span={12}>
                        <Button type="primary" icon={<Icon name="FilePenLine" />}>
                            Редактировать
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button type="dashed" icon={<Icon name="Trash" />}>
                            Удалить
                        </Button>
                    </Col>
                </Row>
            </Box>
            {children}
        </Fragment>
    );
};
