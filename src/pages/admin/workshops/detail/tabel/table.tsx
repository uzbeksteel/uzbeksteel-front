import { Box, Table } from '@/components';
import { WorkShopBranchesComplumns } from './constants';

export const WorkshopBranchesTable = () => {
    const dataSource = [
        {
            id: 1,
            name: 'Test tsehi',
            master: 'Ashraf Azizbey',
        },
    ];
    return (
        <Box>
            <Table titleTable="Бўлимлар рўйхати" columns={WorkShopBranchesComplumns} dataSource={dataSource} />
        </Box>
    );
};
