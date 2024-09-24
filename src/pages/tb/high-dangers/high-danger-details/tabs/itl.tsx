import { downloadFile, useGetDangerByIdQuery } from '@/lib/services';
import { useParams } from 'react-router-dom';
import { Button, Icon, Table } from '@/components';
import { TableColumnsType } from 'antd';
import { TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import dayjs from 'dayjs';
import { addMessage } from '@/lib/utils';
import { IAccidentOrderFile } from '@/types/accident.ts';
import { CreateItl } from '@/pages/tb/high-dangers/create-itl';

export const Itl = () => {
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
            dataIndex: 'itl_number',
            key: 'itl_number',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: 'id',
            width: '10%',
            render: (_: any, record: IAccidentOrderFile) => {
                return (
                    <Button onClick={() => handleDownloadFile(record.file.id, record.name)} type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Download" /> Юклаш
                    </Button>
                );
            },
        },
    ];

    const handleTableChange = (pagination: TablePaginationConfig) => {
        setCurrentPage(pagination.current || 1);
    };
    return <Table onClick={() => CreateItl(id!)} titleTable="ИТЛ рўйхати" onChange={handleTableChange} dataSource={data?.itl} columns={columns} />;
};
