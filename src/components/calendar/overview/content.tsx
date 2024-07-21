import { Table } from 'antd';
import { Box, Icon } from '@/components';
import { useDeleteGraphicQuery, useGetGraphicsByDateQuery } from '@/lib/services/queries/graphic.ts';
import { IGraphic } from '@/types/graphics.ts';
import { Update } from '@/components/calendar/update';
import { useGraphicStore } from '@/store';

export const Content = () => {
    const params = new URLSearchParams(window.location.href.split('?')[1]);
    const { data, refetch } = useGetGraphicsByDateQuery(params.get('date')?.split('T')[0]);
    const { mutate } = useDeleteGraphicQuery(onSuccess);
    const setUpdateGraphicCredentials = useGraphicStore((state) => state.setUpdateGraphicCredentials);

    async function onSuccess() {
        await refetch();
    }

    const columns = [
        {
            title: 'Цех',
            dataIndex: 'workshop',
            key: 'workshop',
        },
        {
            title: 'Текширув',
            dataIndex: 'inspection',
            key: 'inspection',
        },
        {
            title: '',
            dataIndex: '',
            key: 'actions',
            render: (_: any, record: IGraphic) => {
                const handleEditBtn = () => {
                    setUpdateGraphicCredentials(record);
                    Update();
                };
                return (
                    <Box $align="center" $gap="15px">
                        <Icon style={{ width: '16px', cursor: 'pointer' }} name="Eye" color="#1890ff" />
                        <Icon onClick={handleEditBtn} style={{ width: '16px', cursor: 'pointer' }} name="Pencil" color="#faad14" />
                        <Icon onClick={() => mutate(record.id)} style={{ width: '16px', cursor: 'pointer' }} color="red" name="Trash2" />
                    </Box>
                );
            },
        },
    ];

    const dataWithKeys = data?.map((item) => ({ ...item, key: item.id })) || [];

    return <Table columns={columns} dataSource={dataWithKeys} pagination={false} />;
};
