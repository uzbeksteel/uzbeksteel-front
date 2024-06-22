import { Table } from '@/components';
import { useResponsive } from '@/lib/hooks';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '3',
        name: 'Doe',
        age: 44,
        address: '14 upstreet Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

export const Tab2 = () => {
    const { isTablet } = useResponsive();

    return <Table columns={columns} dataSource={dataSource} titleTable={!isTablet ? '' : 'Чора-тадбирлар рўйхати'} isAdd={false} />;
};
