import { PageHeader } from '@/components';
import { history } from '@/lib/utils';
import { useAppStore } from '@/store';
import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { Tab1, Tab2, Tab3 } from './tabs';
import { items } from './tabs/items';

export const GraphicsDetail = () => {
    const [key, setKey] = useState<string>('1');
    const { setSearch } = useAppStore();

    useEffect(() => {
        history.push(`?type=${key}`);
    }, [key]);

    return (
        <>
            <PageHeader
                title={key === '1' ? 'Далолатномалар' : key === '2' ? 'Чора-тадбирлар' : 'Хисоботлар'}
                tabs={
                    <Tabs
                        defaultActiveKey="1"
                        activeKey={key}
                        onChange={(k: string) => {
                            setKey(k);
                            setSearch('');
                        }}
                        items={items}
                    />
                }
            />
            <br />
            <>{key === '1' ? <Tab1 /> : key === '2' ? <Tab2 /> : <Tab3 />}</>
        </>
    );
};
