import { Box, Table } from '@/components';
import { Content } from '../../components';
import { EducationInfoColumns } from './constants';

export const EducationInfo = () => {
    return (
        <Content title="Сведения о прохождении специального технического обучения">
            <Box
                $justify="space-between"
                $align="end"
                $m="20px"
                style={{
                    background: '#fff',
                    boxShadow: '0px 0px 1px #E5E5E5',
                }}
            >
                <Table columns={EducationInfoColumns} dataSource={[]} bordered />
            </Box>
        </Content>
    );
};
