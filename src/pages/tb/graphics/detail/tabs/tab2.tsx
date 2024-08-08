import { Box, Table } from '@/components';
import { useResponsive } from '@/lib/hooks';
import { getMeasuresQuery } from '@/lib/services/queries/graphic';
import { useAppStore } from '@/store';
import { useParams } from 'react-router-dom';
import { ActsColumns } from './constants';

export const Tab2 = () => {
    const { isTablet } = useResponsive();
    const { id } = useParams();

    const { search } = useAppStore();

    const { isFetching, data } = getMeasuresQuery(id, search === '' ? undefined : search);

    return (
        <Box $align="center" $justify="center">
            <Table columns={ActsColumns} dataSource={data} loading={isFetching} titleTable={!isTablet ? '' : 'Чора-тадбирлар рўйхати'} isAdd={false} />
        </Box>
    );
};
