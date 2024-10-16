import { Icon, User } from '@/components';
import { connectSocket } from '@/lib';
import { USER, getLocalStorage } from '@/lib/utils';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { LayoutHeader } from '../../style';
import { Props } from '../../type';

interface Notification {
    id: string;
    message: string;
}

export const Header = ({ bg }: Props) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [sockets, setSockets] = useState<any>();
    const user = getLocalStorage(USER);

    useEffect(() => {
        const socket = connectSocket(user.id);

        if (socket) {
            setSockets(socket);
        }
    }, []);

    useEffect(() => {
        if (sockets) {
            console.log(sockets, '22222');

            sockets.on('newNotification', (notification: Notification) => {
                setNotifications((prevNotifications) => [notification, ...prevNotifications]);
            });
        }
    }, [sockets]);

    return (
        <>
            <LayoutHeader $bg={bg}>
                <Flex justify="center" align="center" gap={12}>
                    <img src="/logo.svg" height={40} width={140} />
                </Flex>

                <Flex gap="large">
                    <Icon name="Expand" color="#D5680A" />

                    <Icon name="Bell" color="#D5680A" />

                    <Icon name="Settings" color="#D5680A" />

                    <Icon name="Globe" color="#D5680A" />

                    <User />
                </Flex>
            </LayoutHeader>
        </>
    );
};
