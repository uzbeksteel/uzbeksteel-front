import { Box, Icon } from '@/components';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const WorkShoptableComplumns: ColumnsType<any> = [
    {
        title: 'Т/р',
        key: 'id',
        render(_value, _record, index) {
            return index + 1;
        },
        defaultSortOrder: 'descend',
        // sorter: (a, b) => a?.id - b?.id,
    },
    {
        title: 'Цех номи',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Начальник цеха',
        dataIndex: ['workshop_director', 'first_name'],
        key: 'Начальник цеха',
    },

    {
        title: 'Ҳаракат',
        render: () => {
            return (
                <Box $justify="space-around" $align="center">
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
