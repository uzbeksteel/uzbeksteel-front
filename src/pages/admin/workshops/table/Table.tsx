import { Box, Table } from '@/components';
import { WorkShoptableComplumns } from './constants';

export const WorkshopsTable = () => {
    const dataSource = [
        {
            id: 1,
            name: 'Test tsehi',
            workshop: 'Ashraf Azizbey',
        },
    ];
    return (
        <Box>
            <Table titleTable="Цехлар рўйхати" columns={WorkShoptableComplumns} dataSource={dataSource} />
        </Box>
    );
};
