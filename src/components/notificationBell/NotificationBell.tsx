import { useSocket } from '@/store';
import { Notification } from '@/types/notifications';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Button, List, Popover } from 'antd';
import React, { useEffect, useState } from 'react';

export const NotificationBell: React.FC = () => {
    const [unreadCount, setUnreadCount] = useState<number>(0);

    const [notifications, setNotifications] = useState<Notification[]>([]);
    const { socket } = useSocket();

    useEffect(() => {
        if (socket) {
            socket.on('newNotification', (notification: Notification) => {
                setNotifications((prevNotifications) => [notification, ...prevNotifications]);
                setUnreadCount((prevCount) => prevCount + 1);
            });

            return () => {
                socket.off('newNotification');
            };
        }
    }, [socket]);

    useEffect(() => {
        console.log(notifications);
    }, [notifications]);

    const handleMarkAllAsRead = () => {
        setNotifications((prevNotifications) => prevNotifications.map((notification) => ({ ...notification, read: true })));
        setUnreadCount(0);
    };

    const notificationList = (
        <div style={{ width: 600 }}>
            <List dataSource={notifications} renderItem={(notification) => <List.Item style={{ background: notification.read ? '#f0f0f0' : '#fff' }}>{notification.message}</List.Item>} />
            {notifications.length > 0 && (
                <Button type="link" onClick={handleMarkAllAsRead}>
                    Mark all as read
                </Button>
            )}
        </div>
    );

    return (
        <Popover content={notificationList} title="Notifications" trigger="click">
            <Badge count={unreadCount}>
                <BellOutlined style={{ fontSize: '24px', color: '#D5680C', cursor: 'pointer' }} />
            </Badge>
        </Popover>
    );
};
