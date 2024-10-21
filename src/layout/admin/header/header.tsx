import { Icon, LanguageSelect, User } from '@/components';
import { useSocket } from '@/store';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { LayoutHeader } from '../../style';
import { Props } from '../../type';

interface Notification {
    message: string;
}

export const Header = ({ bg }: Props) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const { socket } = useSocket();

    useEffect(() => {
        if (socket) {
            socket.on('newNotification', (notification: Notification) => {
                setNotifications([notification, ...notifications]);
            });

            return () => {
                socket.off('newNotification');
            };
        }
    }, []);

    return (
        <>
            <LayoutHeader $bg={bg}>
                <Flex justify="center" align="center" gap={12}>
                    <img src="/logo.svg" height={40} width={140} />
                </Flex>

                <Flex gap="large" align="center">
                    <Icon name="Expand" color="#D5680A" />

                    <Icon name="Bell" color="#D5680A" />

                    <Icon name="Settings" color="#D5680A" />

                    <LanguageSelect />

                    <User />
                </Flex>
            </LayoutHeader>
        </>
    );
};
