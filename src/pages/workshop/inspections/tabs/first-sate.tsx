import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { useGetMagzineByTypeQuery } from '@/lib/services';
import { useAuthStore } from '@/store';
import { InspectionColumn } from './constants';

export const FirstStageInspection = () => {
    const { user } = useAuthStore();

    const { data, isPending } = useGetMagzineByTypeQuery(CONTROL_TYPE.FIRST_STAGE, user?.workshop?.id as string);
    return <Table loading={isPending} scroll={{ x: true }} columns={InspectionColumn} dataSource={data} titleTable="Текширувлар рўйхати" />;
};
