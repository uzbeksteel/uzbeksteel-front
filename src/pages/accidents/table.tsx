import { Box, Icon, ProfileDisplay, Table as TableComponent } from '@/components';

export const Table = () => {
    const columns = [
        {
            title: 'Т/р',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
        },
        {
            title: 'Цех номи',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Ҳодиса юз берган сана',
            dataIndex: 'incidentDate',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Хабар юборилган сана',
            dataIndex: 'messageSentDate',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Жабрланувчилар сони',
            dataIndex: 'victimsNumber',
            key: 'id',
            width: '5%',
        },
        {
            title: 'Ҳалок бўлганлар',
            dataIndex: 'diedPersons',
            key: 'id',
            width: '20%',
        },
        {
            title: 'Харакатлар',
            dataIndex: 'item',
            key: 'id',
            width: '7%',
            render: () => {
                return (
                    <Box $gap="10px" style={{ color: '#F08D10', cursor: 'pointer' }}>
                        <Icon name="Eye" /> Кўриш
                    </Box>
                );
            },
        },
    ];

    const dataSource = Array(10)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            name: 'Цех номи',
            incidentDate: '12.02.2024',
            messageSentDate: '12.02.2024',
            victimsNumber: 1,
            diedPersons: <ProfileDisplay avatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" fullName="А.Б.Акромов" />,
        }));
    return (
        <Box>
            <TableComponent scroll={{ x: true }} columns={columns} dataSource={dataSource} style={{ width: '100%' }} titleTable="Янги ҳодисалар рўйхати" />
        </Box>
    );
};
