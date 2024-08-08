import { Box, Table } from '@/components';
import { useResponsive } from '@/lib/hooks';
import { getActsQuery } from '@/lib/services/queries/graphic';
import { useAppStore } from '@/store';
import { useParams } from 'react-router-dom';
import { ActsColumns } from './constants';

export const Tab1 = () => {
    const { isTablet } = useResponsive();
    const { id } = useParams();
    const { search } = useAppStore();
    const { data, isFetching } = getActsQuery(id, search === '' ? undefined : search);

    return (
        <Box $align="center" $justify="center">
            <Table columns={ActsColumns} dataSource={data} titleTable={!isTablet ? '' : 'Тузилган далолатномалар рўйхати'} isAdd={false} loading={!!isFetching} />
        </Box>
    );
};
