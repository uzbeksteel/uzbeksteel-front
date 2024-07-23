import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { useGetMagzineByTypeQuery } from '@/lib/services';
import { InspectionColumn } from './constants';

export const SecoundStageInspection = () => {
    const { data, isPending } = useGetMagzineByTypeQuery(CONTROL_TYPE.SECOND_STAGE);

    return <Table loading={isPending} scroll={{ x: true }} columns={InspectionColumn} dataSource={data} titleTable="Текширувлар рўйхати" />;
};
