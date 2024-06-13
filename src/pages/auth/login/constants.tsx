import { TabsProps } from 'antd';
import { Tab1, Tab2 } from '../tabs';

export const getTabs = ({ ...props }) => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'One ID орқали кириш',
            children: <Tab1 onFinish={props.onFinish} isPending={props.isPending} />,
        },
        {
            key: '2',
            label: 'Логин билан кириш',
            children: <Tab2 onFinish={props.onFinish} isPending={props.isPending} />,
        },
    ];
    return items;
};
