import { Box, Icon, Table as TableComponent } from '@/components';
import { AccidentStatus, ROUTES } from '@/constants';
import { useLocation, useParams } from 'react-router-dom';
import { getAccidentsQuery } from '@/lib/services';
import { TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import dayjs from 'dayjs';
import { accidentStatusDictionary } from '@/pages/tb/accidents/dictionary.ts';
import { history } from '@/lib/utils';
import { IAccident } from '@/types/accident.ts';
import { useAuthStore } from '@/store';

interface TableProps {
    status: AccidentStatus;
}

export const Table = ({ status }: TableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { id } = useParams();
    const user = useAuthStore((state) => state.user);
    const { data } = getAccidentsQuery((id || user?.workshop?.id)!, status);
    const { pathname } = useLocation();

    const isWorkshop = pathname.includes(ROUTES.workshop);
    const columns = [
        {
            title: 'Т/р',
            dataIndex: '',
            key: '',
            width: '5%',
            // @ts-ignore
            sorter: (a, b) => a.id - b.id,
            // @ts-ignore
            render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
            showSorterTooltip: false,
        },
        {
            title: 'Ҳодиса юз берган сана',
            dataIndex: 'accidentDate',
            key: 'id',
            width: '10%',
            render: (text: string) => dayjs(text).format('DD.MM.YYYY'),
        },
        {
            title: 'Хабар юборилган сана',
            dataIndex: 'created_at',
            key: 'id',
            width: '10%',
            render: (text: string) => dayjs(text).format('DD.MM.YYYY'),
        },
        {
            title: 'Жабрланувчилар сони',
            dataIndex: 'victimsNumber',
            key: 'victimsNumber',
            width: '5%',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            width: '5%',
            render: (text: AccidentStatus) => accidentStatusDictionary[text],
        },
        {
            title: 'Харакатлар',
            dataIndex: 'item',
            key: 'id',
            width: '7%',
            render: (_: any, record: IAccident) => {
                return (
                    <Box onClick={() => history.push(isWorkshop ? `${ROUTES.workshopAccidents}/${record.id}/details` : ROUTES.accidentDetails.replace(':id', record.id))} $gap="10px" style={{ color: '#F08D10', cursor: 'pointer' }}>
                        <Icon name="Eye" /> Кўриш
                    </Box>
                );
            },
        },
    ];
    const handleTableChange = (pagination: TablePaginationConfig) => {
        setCurrentPage(pagination.current || 1);
    };
    return (
        <Box>
            <TableComponent onClick={() => history.push(`${ROUTES.workshopAccidents}/${id || user?.workshop.id}/${ROUTES.add}`)} isAdd={!isWorkshop} onChange={handleTableChange} scroll={{ x: true }} columns={columns} dataSource={data} style={{ width: '100%' }} titleTable="Янги ҳодисалар рўйхати" />
        </Box>
    );
};
