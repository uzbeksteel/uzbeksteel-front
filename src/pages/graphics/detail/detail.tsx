import { Box, Card, Icon, Typography } from '@/components';
import { Tabs } from 'antd';
import { useState } from 'react';
import { Tab1, Tab2, Tab3 } from './tabs';
import { items } from './tabs/items';

export const GraphicsDetail = () => {
    const [key, setKey] = useState<string>('1');

    return (
        <>
            <Card cardType="horizantal">
                <Box $direction="column" $gap="20px">
                    <Box $gap="20px">
                        <Icon name="ArrowLeft" />
                        <Typography type="title" level={4}>
                            Далолатномалар
                        </Typography>
                    </Box>
                    <Tabs defaultActiveKey="1" activeKey={key} onChange={(k: string) => setKey(k)} items={items} />
                </Box>
            </Card>
            <br />
            <Card cardType="block">{key === '1' ? <Tab1 /> : key === '2' ? <Tab2 /> : <Tab3 />}</Card>
        </>
    );
};
