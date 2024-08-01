import { Box, Table } from '@/components';
import { useResponsive } from '@/lib/hooks';
import { getActsQuery } from '@/lib/services/queries/graphic';
import { IActs } from '@/types/graphics';
import { Badge } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const columns: ColumnsType<IActs> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'File',
        dataIndex: ['file', 'name'],
        key: 'file',
        render: (v) => <Link to={''}>{v}</Link>,
    },
    {
        title: 'Workshop',
        dataIndex: ['workshop', 'name'],
        key: 'workshop',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (v) => <>{v == 'PENDING' ? <Badge status="warning" text={v.toLowerCase()} /> : v == 'APPROVED' ? <Badge status="success" text={v.toLowerCase()} /> : <Badge status="error" text={v.toLowerCase()} />}</>,
    },
];

export const Tab1 = () => {
    const { isTablet } = useResponsive();

    const { data, isLoading } = getActsQuery();

    return (
        <Box $align="center" $justify="center">
            <Table columns={columns} dataSource={data} titleTable={!isTablet ? '' : 'Тузилган далолатномалар рўйхати'} isAdd={false} loading={isLoading} />
        </Box>
    );
};
