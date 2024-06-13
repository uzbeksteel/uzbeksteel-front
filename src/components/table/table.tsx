import { TIsAdd } from '@/types/components';
import { useIsFetching } from '@tanstack/react-query';
import { Table as AntTable, TableProps } from 'antd';
import { Header } from './header';

export const Table = ({ isAdd, ...props }: TableProps<any> & Partial<TIsAdd>) => {
    const isFetching = useIsFetching();

    return <AntTable rowKey="id" bordered loading={!!isFetching} title={() => <Header isAdd={isAdd} />} {...props} />;
};
