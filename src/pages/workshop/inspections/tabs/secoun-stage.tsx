import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { useGetMagzineByTypeQuery } from '@/lib/services';
import { InspectionColumn } from './constants';
import { useParams } from 'react-router-dom';

export const SecoundStageInspection = () => {
    const { id } = useParams();
    const { data, isPending } = useGetMagzineByTypeQuery(CONTROL_TYPE.SECOND_STAGE, id!);

    return <Table loading={isPending} scroll={{ x: true }} columns={InspectionColumn} dataSource={data} titleTable="Текширувлар рўйхати" />;
};
