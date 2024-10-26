import { TUser } from './users';

export interface Notification {
    id: string;
    message: string;
    read: boolean;
}

export interface INotificationLogs {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    sent_at: string;
    status: string;
    error_message: string;
    notification: INotification;
    user: TUser;
}

export interface INotification {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    type: string;
    recurrence: string;
    group: string;
    template: ITemplate;
}

export interface ITemplate {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
    template_name: string;
    subject: string;
    body: string;
    channel: string;
}
