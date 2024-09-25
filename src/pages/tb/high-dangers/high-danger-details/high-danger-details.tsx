import { PageHeader } from '@/components';
import { Tabs } from 'antd';
import { items } from './tabs/items';

export const HighDangerDetails = () => {
    return <PageHeader title="Хавфи юқори бўлган ишлар" tabs={<Tabs defaultActiveKey="1" items={items} />} />;
};
