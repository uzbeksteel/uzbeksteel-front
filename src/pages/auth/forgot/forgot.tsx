import { Icon } from '@/components';
import { ROUTES } from '@/constants';
import { Button, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { dictionary } from '../dictionary';
import { Auth } from '../style';

export const Forgot = () => {
    const onFinish = (values: { username: string; password: string }) => {
        return values;
    };

    return (
        <Auth>
            <Typography.Title>{dictionary.title}</Typography.Title>

            <Form onFinish={onFinish} style={{ width: '500px' }}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input prefix={<Icon name="UserRound" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password prefix={<Icon name="LockKeyhole" />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" block htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>

                <Flex justify="center">
                    <Link to={ROUTES.forgot}>Forgot password</Link>
                </Flex>
            </Form>
        </Auth>
    );
};
