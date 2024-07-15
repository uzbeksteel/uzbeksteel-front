import { Layout as AntLayout, theme } from 'antd';
import { Content } from './content';
import { Sider } from './content/sider';
import { Header } from './header';

export const AdminLayout = () => {
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
