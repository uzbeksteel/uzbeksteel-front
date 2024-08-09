import { Box, Table } from '@/components';
import { useResponsive } from '@/lib/hooks';
import { getReportsQuery } from '@/lib/services';
import { useAppStore } from '@/store';
import { useParams } from 'react-router-dom';
import { ActsColumns } from './constants';

export const Tab3 = () => {
    const { isTablet } = useResponsive();
    const { id } = useParams();
    const { search } = useAppStore();

    const { isFetching, data } = getReportsQuery(id, search === '' ? undefined : search);

    return (
        <Box $align="center" $justify="center">
            <Table columns={ActsColumns} loading={isFetching} dataSource={data} titleTable={!isTablet ? '' : 'Тузилган далолатномалар рўйхати'} isAdd={false} />
        </Box>
    );
};
