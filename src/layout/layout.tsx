import { Layout as AntLayout, theme } from 'antd';
import { Content } from './content';
import { Header } from './header';
import { Sider } from './sider';

export const Layout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <AntLayout>
            <Header bg={colorBgContainer} />

            <AntLayout>
                <Sider bg={colorBgContainer} />

                <Content bg={colorBgContainer} />
            </AntLayout>
        </AntLayout>
    );
};
