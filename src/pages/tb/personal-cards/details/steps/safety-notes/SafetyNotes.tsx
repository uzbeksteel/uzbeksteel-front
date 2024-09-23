import { Box, Loading, Table } from '@/components';
import { useSafetyNotesQuery } from '@/lib/services';
import { errorMessage } from '@/lib/utils';
import { Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { Content } from '../../components';
import { SafetyNotesColumns } from './constants';

export const SafetyNotes = () => {
    const { id } = useParams();
    const { data, isPending, isError, error } = useSafetyNotesQuery(id!);

    if (isPending) {
        return <Loading />;
    }

    if (isError) {
        errorMessage(error?.message);
        return <Alert message={error.message} />;
    }

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
                <Table columns={SafetyNotesColumns} dataSource={data.data} bordered />
            </Box>
        </Content>
    );
};
