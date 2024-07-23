import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { signatureMagazineMutation, useGetMagzineByTypeQuery } from '@/lib/services';
import { InspectionColumn } from './constants';

export const SecoundStageInspection = () => {
    const { data, isPending } = useGetMagzineByTypeQuery(CONTROL_TYPE.SECOND_STAGE);

    const { mutate } = signatureMagazineMutation();

    const handleSuccess = (id: string) => {
        mutate(id, {
            onSuccess: (data) => {},
        });
    };

    return <Table loading={isPending} scroll={{ x: true }} columns={InspectionColumn({ success: handleSuccess })} dataSource={data} titleTable="Текширувлар рўйхати" />;
};
