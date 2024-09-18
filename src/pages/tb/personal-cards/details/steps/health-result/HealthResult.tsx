import { Box, Table } from '@/components';
import { Content } from '../../components';
import { HealthResultColumns } from './constants';

export const HealthResult = () => {
    return (
        <Content title="Сведения о прохождении медицинского осмотра">
            <Box
                $justify="space-between"
                $align="end"
                $m="20px"
                style={{
                    background: '#fff',
                    boxShadow: '0px 0px 1px #E5E5E5',
                }}
            >
                <Table columns={HealthResultColumns} dataSource={[]} bordered />
            </Box>
        </Content>
    );
};
