import { Box, Loading, PageHeader, Table } from '@/components';
import { getAllWorkshopsQuery } from '@/lib/services';
import { columns } from './constants';

export const Workshop = () => {
    const { data, isPending, isLoading } = getAllWorkshopsQuery();

    if (isPending) {
        return <Loading />;
    }
    return (
        <Box $direction="column">
            <PageHeader title={'Цехлар'} />
            <Box $p="5px">
                <Table titleTable="Цехлар" loading={isLoading} columns={columns} dataSource={data} isAdd={true} />
            </Box>
        </Box>
    );
};
