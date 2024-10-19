import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { signatureMagazineMutation, useGetMagzineByTypeQuery } from '@/lib/services';
import { useParams } from 'react-router-dom';
import { InspectionColumn } from './constants';

export const FirstStageInspection = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching } = useGetMagzineByTypeQuery(CONTROL_TYPE.FIRST_STAGE, id as string);
    const { mutate } = signatureMagazineMutation();

    const handleSuccess = (id: string) => {
        mutate(id, {
            onSuccess: () => {},
        });
    };

    return <Table isAdd loading={isLoading || isFetching} scroll={{ x: true }} columns={InspectionColumn({ success: handleSuccess })} dataSource={data || []} titleTable="Текширувлар рўйхати" />;
};
