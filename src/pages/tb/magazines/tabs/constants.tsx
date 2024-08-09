import { Box, Icon } from '@/components';
import { dateFormatter } from '@/lib/utils';
import { IMagazine } from '@/types/magazine';
import { TUser } from '@/types/users';
import { Button, Flex, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Key } from 'react';

export const InspectionColumn = ({ success }: { success: (id: string) => void }): ColumnsType<any> => {
    return [
        {
            title: 'Т/р',
            render(_value, _record, index) {
                return index + 1;
            },
            key: 'id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a?.id - b?.id,
        },
        {
            title: 'Назоратни ўтказиш санаси',
            dataIndex: 'control_date',
            render: (date: string) => dateFormatter(date),
            key: 'control_date',
        },
        {
            title: 'Меҳнатни муҳофаза қилиш бўйича аниқланган камчилик ва бузилишлар',
            dataIndex: 'omissions',
            key: 'omissions',
            width: '400px',
        },
        {
            title: 'Камчилик ва бузилишларни бартараф этиш бўйича чора-тадбирлар',
            dataIndex: 'measures',
            key: 'measures',
            width: '400px',
        },
        {
            title: 'Уста ва меҳнатни муҳофаза қилиш бўйича вакилнинг Ф.И.Ш.',
            dataIndex: ['commissions'],
            key: 'commissions',
            render: (user: TUser[]) => (
                <Flex align="center" vertical>
                    {user.map((u: TUser, index: Key | null | undefined) => (
                        <Tag color="success" key={index}>
                            {u.first_name}
                        </Tag>
                    ))}
                </Flex>
            ),
            width: '200px',
        },
        {
            title: 'Ижроси учун жавобгар шахслар',
            dataIndex: ['responsibles'],
            key: 'responsibles',
            render: (user: TUser[]) => {
                return user.map((u: TUser, index: Key | null | undefined) => (
                    <Tag color="success" key={index}>
                        {u.first_name} {u.last_name}
                    </Tag>
                ));
            },
        },

        {
            title: 'Бажариш муддати',
            dataIndex: 'complate_date',
            render: (date: string) => dateFormatter(date),
            key: 'complate_date',
        },

        {
            title: 'Бажарилганлиги бўйича белги',
            dataIndex: ['signature'],
            key: 'signature',
            render: (signature: boolean) => {
                return <Tag color={`${signature ? 'success' : 'processing'}`}>{signature ? 'Тасдиқланган' : 'Тасдиқланмаган'}</Tag>;
            },
        },
        {
            title: 'Тасдиқлаш',
            render: (el: IMagazine) => {
                return (
                    <Box $justify="space-around" $align="center">
                        <Button onClick={() => success(el.id)} disabled={el.signature} type="primary">
                            <Icon name="BadgeCheck" />
                        </Button>
                    </Box>
                );
            },
            width: '100px',
        },
    ];
};
