import { Loading } from '@/components';
import { useUserNotificationsQuery } from '@/lib/services';
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, List, Typography } from 'antd';

export const NotificationsPage = () => {
    const { isLoading, data } = useUserNotificationsQuery();
    const { Title } = Typography;

    if (isLoading) {
        return <Loading />;
    }

    const renderStatusIcon = (status: string) => {
        switch (status) {
            case 'SENT':
                return <CheckCircleOutlined style={{ color: 'green' }} />;
            case 'FAILED':
                return <CloseCircleOutlined style={{ color: 'red' }} />;
            case 'PENDING':
                return <ExclamationCircleOutlined style={{ color: 'orange' }} />;
            default:
                return null;
        }
    };

    return (
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
            <Title level={3}>Notifications</Title>
            <List
                itemLayout="vertical"
                dataSource={data?.data}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar icon={renderStatusIcon(item.status)} />}
                            title={
                                <span>
                                    {item.notification?.template.template_name || 'New Notification!'}
                                    <Badge style={{ marginLeft: 8 }} color={item.status === 'SENT' ? 'green' : item.status === 'FAILED' ? 'red' : 'orange'} text={item.status} />
                                </span>
                            }
                            description={
                                <>
                                    <div>Subject: {item.notification?.template.subject}</div>
                                    <div>Body: {item.notification?.template.body}</div>
                                    <div>Message: {item?.error_message}</div>
                                    <div>Sent At: {new Date(item?.sent_at).toLocaleString()}</div>
                                    <div>Type: {item.notification?.type}</div>
                                </>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
