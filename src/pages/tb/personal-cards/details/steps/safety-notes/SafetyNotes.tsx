import { Box, Table } from '@/components';
import { Content } from '../../components';
import { SafetyNotesColumns } from './constants';

export const SafetyNotes = () => {
    return (
        <Content title="Отметка о вручении инструкций по охране труда, промышленной безопасности и производственной санитарии">
            <Box
                $justify="space-between"
                $align="end"
                $m="20px"
                style={{
                    background: '#fff',
                    boxShadow: '0px 0px 1px #E5E5E5',
                }}
            >
                <Table columns={SafetyNotesColumns} dataSource={[]} bordered />
            </Box>
        </Content>
    );
};
