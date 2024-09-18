import { Box, Button, Icon, Typography } from '@/components';
import { Col, Row } from 'antd';
import { Fragment, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
    onclick?: (e: any) => void;
    children: ReactNode;
}

export const Content = ({ title, children, onclick }: Props) => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    {title.slice(0, 40)}...
                </Typography>
                <Row style={{ marginLeft: 'auto' }} gutter={10}>
                    <Col span={12}>
                        <Button onClick={onclick} type="primary" icon={<Icon name="FilePenLine" />}>
                            Редактировать
                        </Button>
                    </Col>
                </Row>
            </Box>
            {children}
        </Fragment>
    );
};
