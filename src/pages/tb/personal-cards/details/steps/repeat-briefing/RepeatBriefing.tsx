import { Box, Loading, Table } from '@/components';
import { useRepeatPerconalQuery } from '@/lib/services/queries/r-briefing';
import { errorMessage } from '@/lib/utils';
import { Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { Content } from '../../components';
import { EmergancyBreafingColumn } from './constants';

export const RepeatBriefing = () => {
    const { id } = useParams();
    const { data, isPending, isError, error } = useRepeatPerconalQuery(id as string);
    console.log(data);

    if (isPending) {
        return <Loading />;
    }
    if (isError) {
        errorMessage(error?.message);
        return <Alert message={error?.message} type="error" showIcon />;
    }

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
                <Table columns={EmergancyBreafingColumn} dataSource={data || []} bordered />
            </Box>
        </Content>
    );
};
