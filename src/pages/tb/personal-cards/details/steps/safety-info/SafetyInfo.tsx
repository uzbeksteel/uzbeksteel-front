import { Box, Loading, Table } from '@/components';
import { useSafetyInfoQuery } from '@/lib/services';
import { useAppStore } from '@/store';
import { useParams } from 'react-router-dom';
import { Content } from '../../components';
import { SafetyInfoColumns } from './constants';

export const SafetyInfo = () => {
    const { id } = useParams();
    const { search } = useAppStore();
    const { data, isLoading } = useSafetyInfoQuery(id!, search);

    if (isLoading) {
        return <Loading />;
    }
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
                    <Table
                        columns={SafetyInfoColumns}
                        dataSource={data?.data}
                        pagination={{
                            position: ['bottomCenter'],
                            current: data?.meta.currentPage,
                            pageSize: data?.meta.itemsPerPage,
                            total: data?.meta.totalItems,
                        }}
                    />
                </Box>
            </Content>
        </>
    );
};
