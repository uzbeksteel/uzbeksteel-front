import { Button, Field, Icon } from '@/components';
import { Input } from 'antd';
import { FC } from 'react';
import { dictionary } from '../dictionary';
import { AuthForm } from '../style';
import { TabProps } from './type';

interface Values {
    login: string;
    password: string;
}
17;

export const Tab2: FC<TabProps<Values> & { isPending: boolean }> = ({ onFinish, isPending }) => {
    return (
        <AuthForm layout="vertical" onFinish={onFinish}>
            <Field span={24} name="login" prefix={<Icon name="User" />} placeholder="Имя пользователя" />
            <Field span={24} name="password">
                <Input.Password style={{ borderRadius: 0 }} prefix={<Icon name="LockKeyhole" />} type="password" placeholder="Пароль" />
            </Field>
            <Field span={24}>
                <Button type="primary" block htmlType="submit" disabled={isPending} loading={isPending}>
                    {dictionary.login}
                </Button>
            </Field>
        </AuthForm>
    );
};
