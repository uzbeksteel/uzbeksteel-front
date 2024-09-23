import { Typography } from '@/components';
import { ROUTES, UserTypes } from '@/constants';
import { useLoginQuery } from '@/lib/services';
import { setLocalStorage } from '@/lib/utils';
import { useAuthStore } from '@/store';
import { ILoginResponse, TLoginBody } from '@/types/auth';
import { Flex, Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { dictionary } from '../dictionary';
import { Auth } from '../style';
import { getTabs } from './constants';

export const Login = () => {
    const { setToken, setIsAuth, setUser } = useAuthStore();
    const { mutateAsync, isPending } = useLoginQuery(onSuccess);
    const navigate = useNavigate();

    function onSuccess(data: ILoginResponse) {
        const user = data.data;
        setIsAuth(true);
        setToken(data.accessToken);
        setUser(user);
        setLocalStorage('user', user);
        if (user.user_type === UserTypes.GRAND_MASTER || user.user_type === UserTypes.MASTER) {
            navigate(ROUTES.workshop);
        } else if (user.user_type === UserTypes.INDUSTRIAL_SECURITY) {
            navigate(ROUTES.graphics);
        }
    }

    const onFinish = (values: TLoginBody) => {
        mutateAsync(values);
    };

    const onChange = () => {};

    return (
        <Auth>
            <Flex style={{ flexDirection: 'column' }} justify="center" align="center" gap={12}>
                <img src="/logo.svg" height={64} width={226} />
                <Typography type="text" color="#00000073">
                    {dictionary.title}
                </Typography>
            </Flex>
            <Tabs defaultActiveKey="1" items={getTabs({ onFinish, isPending })} onChange={onChange} />
        </Auth>
    );
};
