import { Box, Icon, Table, Typography } from '@/components';
import { ROUTES } from '@/constants';
import { useProfessionsQuery } from '@/lib/services';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { columns } from './components';

export const Profession = () => {
    const { data, isLoading } = useProfessionsQuery();
    const navigate = useNavigate();

    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Касблар
                </Typography>
            </Box>
            <Box $p="20px">
                <Table
                    scroll={{ x: true }}
                    columns={columns}
                    dataSource={data || []}
                    titleTable="Касблар"
                    loading={isLoading}
                    onClick={() => {
                        navigate(`${ROUTES.add}?type=1`);
                    }}
                />
            </Box>
        </Fragment>
    );
};
