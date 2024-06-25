import { Table } from 'antd';
import { Box, Icon } from '@/components';

export const Content = () => {
    const columns = [
        {
            title: 'Цех',
            dataIndex: 'workshop',
            key: 'id',
        },
        {
            title: 'Текширув',
            dataIndex: 'inspection',
            key: 'id',
        },
        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: () => (
                <Box $align="center" $gap="15px">
                    <Icon style={{ width: '16px' }} name="Eye" color="#1890ff" />
                    <Icon style={{ width: '16px' }} name="Pencil" color="#faad14" />
                    <Icon style={{ width: '16px' }} color="red" name="Trash2" />
                </Box>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            workshop: 'РМИЧ',
            inspection: 'РМИЧ (барча участкалари ва бўлинмалари)',
        },
        {
            id: 2,
            workshop: 'Қуюв-прокатлаш мажмуаси',
            inspection: '12,13-участкалар, Техникаларни таъмирлаш участкалари, омборхоналар, комбинат таркибий бўлинмалари ҳудудларидаги қурилиш ишлари олиб борилаётган объектлар',
        },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
};
