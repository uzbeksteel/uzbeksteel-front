import { ColumnsType } from 'antd/es/table';
import { Button, Icon, Table as TableComponent } from '@/components';
import { useNavigate } from 'react-router-dom';

export const Table = () => {
    const navigate = useNavigate();
    const columns: ColumnsType = [
        {
            title: 'Т/р',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
        },
        {
            title: 'Лавозим ва касблар номи',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'ММСК бўйича коди',
            dataIndex: 'code',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Штат бўйича умумий сони',
            dataIndex: 'totalNumberByState',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Умумий ишчилар сони',
            dataIndex: 'totalEmployeesCount',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Aёллар сони',
            dataIndex: 'womenCount',
            key: 'id',
            width: '5%',
        },
        {
            title: 'Харакатлар',
            dataIndex: 'item',
            key: 'id',
            width: '10%',
            render: (_, record) => {
                return (
                    <Button onClick={() => navigate(':' + record.id)} type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Eye" /> Кўриш
                    </Button>
                );
            },
        },
    ];

    const dataSource = Array(10)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            name: 'Токар',
            code: '7223',
            totalNumberByState: '23',
            totalEmployeesCount: '20',
            womenCount: '3',
        }));
    return <TableComponent onClick={() => navigate('/certification/add')} scroll={{ x: true }} columns={columns} dataSource={dataSource} titleTable="Aттестациядан ўтказиш рўйхати" />;
};
