import { TabsProps } from 'antd';
import { Tab11, Tab21 } from '../tabs';

export const getTabs = ({ ...props }) => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'One ID орқали кириш',
            children: <Tab11 onFinish={props.onFinish} isPending={props.isPending} />,
        },
        {
            key: '2',
            label: 'Логин билан кириш',
            children: <Tab21 onFinish={props.onFinish} isPending={props.isPending} />,
        },
    ];
    return items;
};
