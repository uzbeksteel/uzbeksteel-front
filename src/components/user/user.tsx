import { Avatar, Dropdown, Flex, MenuProps, Space } from 'antd';
import { Icon, Typography } from '@/components';
import { useAuthStore } from '@/store';
import { history } from '@/lib/utils';
import { ROUTES } from '@/constants';

export const User = () => {
    const { user, logout } = useAuthStore();

    const onClick: MenuProps['onClick'] = ({ key }) => {
        switch (key) {
            case '1':
                logout();
                break;
            case '2':
                history.push(`${ROUTES.personalCard}/${ROUTES.add.replace(':id', user?.id!)}`);
                break;
        }
    };

    const items: MenuProps['items'] = [
        {
            label: (
                <Typography type="title" level={5}>
                    Чиқиш
                </Typography>
            ),
            key: '1',
            icon: <Icon name="LogOut" />,
        },
        {
            label: (
                <Typography type="title" level={5}>
                    Профил
                </Typography>
            ),
            key: '2',
            icon: <Icon name="SquareUser" />,
        },
    ];

    return (
        <Flex gap={10} justify="space-between" align="center">
            <Flex justify="center" align="center" gap={12}>
                <Avatar icon={<Icon name="User" />} />
            </Flex>
            <Dropdown menu={{ items, onClick }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Typography type="title" level={5} marginBottom="0" color="#D5680A !important">
                            {user?.first_name}
                        </Typography>
                        <Icon name="ChevronDown" color="#D5680A" />
                    </Space>
                </a>
            </Dropdown>
        </Flex>
    );
};
