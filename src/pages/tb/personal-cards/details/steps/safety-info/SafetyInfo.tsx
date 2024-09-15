import { Box, Table } from '@/components';
import { Content } from '../../components';
import { SafetyInfoColumns } from './constants';

export const SafetyInfo = () => {
    return (
        <>
            <Content title="Сведения о проверке знаний по охране труда и промышленной безопасности">
                <Box
                    $justify="space-between"
                    $align="end"
                    $m="20px"
                    style={{
                        background: '#fff',
                        boxShadow: '0px 0px 1px #E5E5E5',
                    }}
                >
                    <Table columns={SafetyInfoColumns} dataSource={[]} />
                </Box>
            </Content>
        </>
    );
};
