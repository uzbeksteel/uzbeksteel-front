import { Box, Icon } from '@/components';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const WorkShoptableComplumns: ColumnsType<any> = [
    {
        title: 'Т/р',
        dataIndex: 'id',
        key: 'id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a?.id - b?.id,
    },
    {
        title: 'Цех номи',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Начальник цеха',
        dataIndex: ['workshop'],
        key: 'Начальник цеха',
    },

    {
        title: 'Ҳаракат',
        render: () => {
            return (
                <Box $justify="space-around" $align="center">
                    {/* <Flex justify="space-around"></Flex> */}
                    <Button>
                        <Icon name={'Pencil'} color="#52C41A" />
                    </Button>
                    <Button>
                        <Icon name={'Eye'} color="#F08D10" />
                    </Button>
                </Box>
            );
        },
        width: '200px',
    },
];
