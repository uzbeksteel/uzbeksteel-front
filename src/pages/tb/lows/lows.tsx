import { Box, Table, Typography } from '@/components';
import { useDocumentsQuery } from '@/lib/services';
import { Fragment } from 'react/jsx-runtime';
import { columns } from './constants';

export const Lows = () => {
    const { data, isLoading, isRefetching } = useDocumentsQuery();

    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Typography type="title" level={3}>
                    Хужжатлар
                </Typography>
            </Box>
            <Box $p="20px">
                <Table loading={isLoading || isRefetching} columns={columns} dataSource={data || []} />
            </Box>
        </Fragment>
    );
};
