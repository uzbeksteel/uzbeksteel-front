import { PageHeader } from '@/components';
import { Tabs } from 'antd';
import { getTabs } from './constants';

export const Graphics = () => {
    return <PageHeader title="Графиклар" tabs={<Tabs defaultActiveKey="1" items={getTabs()} />} />;
};
