import { Box, Table } from '@/components';
import { Content } from '../../components';
import { RepeatBriefingColumns } from './constants';

export const RepeatBriefing = () => {
    return (
        <Content title="Сведения о прохождении периодического (повторного) инструктажа и обучения">
            <Box
                $justify="space-between"
                $align="end"
                $m="20px"
                style={{
                    background: '#fff',
                    boxShadow: '0px 0px 1px #E5E5E5',
                }}
            >
                <Table columns={RepeatBriefingColumns} dataSource={[]} />
            </Box>
        </Content>
    );
};
