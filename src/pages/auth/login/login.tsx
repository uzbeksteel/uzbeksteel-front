import { Typography } from '@/components';
import { useLoginQuery } from '@/lib/services';
import { useAuthStore } from '@/store';
import { ILoginResponse, TLoginBody } from '@/types/auth';
import { Flex, Tabs } from 'antd';
import { dictionary } from '../dictionary';
import { Auth } from '../style';
import { getTabs } from './constants';
import { addMessage } from '@/lib/utils';

export const Login = () => {
    const { setToken, setIsAuth } = useAuthStore();
    const { mutateAsync, isPending } = useLoginQuery(onSuccess);

    function onSuccess(data: ILoginResponse) {
        setToken(data.accessToken);
    }

    const onFinish = (values: TLoginBody) => {
        if (values.login === 'jasur' && values.password === 'jasdev01') {
            setIsAuth(true);
        } else {
            addMessage('Тизмга кириш мумкин емас');
        }
        mutateAsync(values);
    };

    const onChange = () => {};

    return (
        <Auth>
            <Flex style={{ flexDirection: 'column' }} justify="center" align="center" gap={12}>
                <img src="/logo.svg" height={64} width={226} />
                <Typography
                    type="text"
                    color="#00000073;
"
                >
                    {dictionary.title}
                </Typography>
            </Flex>
            <Tabs defaultActiveKey="1" items={getTabs({ onFinish, isPending })} onChange={onChange} />;
        </Auth>
    );
};
