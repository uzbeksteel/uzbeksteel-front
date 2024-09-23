import { Box, Loading, Table } from '@/components';
import { useEducationInfoQuery } from '@/lib/services';
import { errorMessage } from '@/lib/utils';
import { Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { Content } from '../../components';
import { EducationInfoColumns } from './constants';

export const EducationInfo = () => {
    const { id } = useParams();
    const { data, isPending, isError, error } = useEducationInfoQuery(id!);

    if (isPending) {
        return <Loading />;
    }

    if (isError) {
        errorMessage(error?.message);
        return <Alert message={error?.message} type="error" showIcon />;
    }
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
                <Table columns={EducationInfoColumns} dataSource={data.data} bordered />
            </Box>
        </Content>
    );
};
