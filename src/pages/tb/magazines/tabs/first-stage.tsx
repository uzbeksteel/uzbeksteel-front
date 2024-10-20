import { Table } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { useGetMagzineByTypeQuery } from '@/lib/services';
import { useAppStore } from '@/store';
import { createSearchParams, useLocation, useNavigate, useParams } from 'react-router-dom';
import { InspectionColumn } from './constants';

export const FirstStageInspection = () => {
    const { setIsModal } = useAppStore();
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const { data, isLoading, isFetching } = useGetMagzineByTypeQuery(CONTROL_TYPE.FIRST_STAGE, id as string);

    const handleSuccess = (id: string) => {
        const queryParams = { inspection: id };
        navigate(
            {
                pathname: location.pathname,
                search: `?${createSearchParams(queryParams)}`,
            },
            { replace: true },
        );
        setIsModal(true);
    };

    return <Table isAdd loading={isLoading || isFetching} scroll={{ x: true }} columns={InspectionColumn({ success: handleSuccess })} dataSource={data || []} titleTable="Текширувлар рўйхати" />;
};
