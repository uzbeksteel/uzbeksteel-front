import { Card, PageHeader } from '@/components';
import { Tabs } from 'antd';
import { useState } from 'react';
import { Tab1, Tab2, Tab3 } from './tabs';
import { items } from './tabs/items';

export const GraphicsDetail = () => {
    const [key, setKey] = useState<string>('1');

    return (
        <>
            <PageHeader title="Далолатномалар" tabs={<Tabs defaultActiveKey="1" activeKey={key} onChange={(k: string) => setKey(k)} items={items} />} />
            <br />
            <Card>{key === '1' ? <Tab1 /> : key === '2' ? <Tab2 /> : <Tab3 />}</Card>
        </>
    );
};
