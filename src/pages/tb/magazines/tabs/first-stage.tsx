import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { signatureMagazineMutation, useGetMagzineByTypeQuery } from '@/lib/services';
import { InspectionColumn } from './constants';

export const FirstStageInspection = () => {
    const { data, isLoading } = useGetMagzineByTypeQuery(CONTROL_TYPE.FIRST_STAGE);

    const { mutate } = signatureMagazineMutation();

    const handleSuccess = (id: string) => {
        mutate(id, {
            onSuccess: (data) => {},
        });
    };
    return <Table loading={isLoading} scroll={{ x: true }} columns={InspectionColumn({ success: handleSuccess })} dataSource={data} titleTable="Текширувлар рўйхати" />;
};
