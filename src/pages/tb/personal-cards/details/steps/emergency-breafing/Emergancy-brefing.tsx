import { Box, Table } from '@/components';
import { useParams } from 'react-router-dom';
import { Content } from '../../components';
import { EmergancyBreafingColumn } from './constants';

export const EmergancyBreafing = () => {
    const { id } = useParams();

    return (
        <Content title="Сведения о внеочередном инструктаже. Проработка приказов и других директивных указаний">
            <Box
                $justify="space-between"
                $align="end"
                $m="20px"
                style={{
                    background: '#fff',
                    boxShadow: '0px 0px 1px #E5E5E5',
                }}
            >
                <Table columns={EmergancyBreafingColumn} dataSource={[]} bordered />
            </Box>
        </Content>
    );
};
