import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { useGetMagzineByTypeQuery } from '@/lib/services';
import { InspectionColumn } from './constants';

export const FirstStageInspection = () => {
    const { data, isPending } = useGetMagzineByTypeQuery(CONTROL_TYPE.FIRST_STAGE);
    return <Table loading={isPending} scroll={{ x: true }} columns={InspectionColumn} dataSource={data} titleTable="Текширувлар рўйхати" />;
};
