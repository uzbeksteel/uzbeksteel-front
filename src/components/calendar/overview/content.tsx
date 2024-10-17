import { Table, Tag } from 'antd';
import { Box } from '@/components';
import { useDeleteGraphicQuery, useGetGraphicsByDateQuery, useUpdateGraphicQuery } from '@/lib/services/queries/graphic.ts';
import { IGraphic } from '@/types/graphics.ts';
import { GraphicStatus, ROUTES } from '@/constants';
import { history } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';
import { Update } from '@/components/calendar/update';
import dayjs from 'dayjs';
import { graphicsDictionary } from '@/pages/tb/graphics/dictionary.ts';
import { CircleCheckBig, Eye, Pencil, Trash2 } from 'lucide-react';
import { useModalStore } from '@/store';
import { modalIds } from '@/components/calendar/constants.ts';
import { TagColor } from '@/pages/tb/graphics/constants.tsx';

export const Content = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, refetch, isFetching } = useGetGraphicsByDateQuery(searchParams.get('date')?.split('T')[0]);
    const { mutate: deleteGraphic } = useDeleteGraphicQuery(onSuccess);
    const { mutate: updateGraphic } = useUpdateGraphicQuery();
    const closeModal = useModalStore((state) => state.closeModal);
    async function onSuccess() {
        await refetch();
    }

    const columns = [
        {
            title: 'Цех',
            dataIndex: ['workshop', 'name'],
            key: 'workshop',
        },
        {
            title: 'Текширув',
            dataIndex: 'inspection',
            key: 'inspection',
        },
        {
            title: 'Чора тадбир ва хисоботни топшириш санаси',
            dataIndex: 'submissionDate',
            key: 'submissionDate',
            render: (text: string) => text && dayjs(text).format('DD.MM.YYYY'),
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (text: GraphicStatus) => <Tag color={TagColor[text]}>{graphicsDictionary.status[text]}</Tag>,
        },
        {
            title: 'Ҳаракат',
            dataIndex: '',
            key: 'actions',
            render: (_: any, record: IGraphic) => {
                const handleEditBtn = () => {
                    const currentParams = Object.fromEntries([...searchParams]);
                    setSearchParams({
                        ...currentParams,
                        graphicId: record.id,
                    });
                    Update();
                };
                const handleEyeBtn = () => {
                    closeModal(modalIds.overview);
                    history.push(`${ROUTES.graphics}/${record.id}`);
                };
                return (
                    <Box $align="center" $gap="10px">
                        <Eye onClick={handleEyeBtn} style={{ width: '16px', cursor: 'pointer' }} color="#1890ff" size={19} />
                        <Pencil onClick={handleEditBtn} style={{ width: '16px', cursor: 'pointer' }} color="#faad14" size={19} />
                        <Trash2 onClick={() => deleteGraphic(record.id)} style={{ width: '16px', cursor: 'pointer' }} color="red" size={19} />
                        <CircleCheckBig onClick={() => updateGraphic({ id: record.id, status: GraphicStatus.COMPLETED })} style={{ width: '16px', cursor: 'pointer' }} color="green" size={19} />
                    </Box>
                );
            },
        },
    ];

    const dataWithKeys = data?.map((item) => ({ ...item, key: item.id })) || [];

    return <Table scroll={{ x: true }} columns={columns} dataSource={dataWithKeys} pagination={false} loading={isFetching} />;
};
