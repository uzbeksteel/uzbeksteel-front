import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { downloadFile, useGetDangerByIdQuery } from '@/lib/services';
import { TablePaginationConfig } from 'antd/es/table';
import { Box, Button, Icon, Table } from '@/components';
import { TableColumnsType } from 'antd';
import { IAccidentOrderFile } from '@/types/accident.ts';
import { addMessage } from '@/lib/utils';
import dayjs from 'dayjs';
import { CreateOrder } from '../../create-order';

export const Order = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useGetDangerByIdQuery(id!);

    const handleDownloadFile = async (id: string, fileName: string) => {
        try {
            const response = await downloadFile(id);

            const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            const fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', fileName);
            document.body.appendChild(fileLink);

            fileLink.click();

            fileLink.remove();
            window.URL.revokeObjectURL(fileURL);
        } catch (error) {
            addMessage(error);
        }
    };

    const columns: TableColumnsType = [
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
            title: 'Файл',
            dataIndex: ['file', 'name'],
            key: 'id',
        },
        {
            title: 'Санаси',
            dataIndex: 'date',
            key: 'date',
            render: (text) => dayjs(text).format('DD.MM.YYYY'),
        },
        {
            title: 'Раками',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: 'id',
            width: '10%',
            render: (_: any, record: IAccidentOrderFile) => {
                return (
                    <Button onClick={() => handleDownloadFile(record.file.id, record.file.name)} type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Download" /> Юклаш
                    </Button>
                );
            },
        },
    ];

    const handleTableChange = (pagination: TablePaginationConfig) => {
        setCurrentPage(pagination.current || 1);
    };
    return (
        <Box>
            <Table onClick={() => CreateOrder(id!)} titleTable="Буйруқлар рўйхати" onChange={handleTableChange} dataSource={data?.order} columns={columns} />
        </Box>
    );
};
