import { TIsAdd } from '@/types/components';
import { useIsFetching } from '@tanstack/react-query';
import { TableProps } from 'antd';
import { Header } from './header';
import { AndtTable } from './style';

export const Table = ({ isAdd, onRotate, titleTable, onClick, ...props }: TableProps<any> & Partial<TIsAdd>) => {
    const isFetching = useIsFetching();

    return (
        <AndtTable
            style={{ borderRadius: '0px' }}
            pagination={{
                position: ['bottomCenter'],
                style: {
                    color: 'red',
                    borderRadius: '0px !important',
                },
            }}
            rowKey="id"
            bordered
            loading={!!isFetching}
            title={() => <Header onRotate={onRotate} onClick={onClick} isAdd={isAdd} titleTable={titleTable} />}
            {...props}
        />
    );
};
