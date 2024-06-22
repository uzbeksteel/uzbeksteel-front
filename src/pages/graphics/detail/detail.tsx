import { Box, Card, Icon, Typography } from '@/components';
import { history } from '@/lib/utils';
import { Tabs } from 'antd';
import { useState } from 'react';
import { Tab1, Tab2, Tab3 } from './tabs';
import { items } from './tabs/items';

export const GraphicsDetail = () => {
    const [key, setKey] = useState<string>('1');

    return (
        <>
            <Card>
                <Box $direction="column" $gap="20px">
                    <Box $gap="20px">
                        <Icon name="ArrowLeft" onClick={() => history.back()} style={{ cursor: 'pointer' }} />
                        <Typography type="title" level={4}>
                            Далолатномалар
                        </Typography>
                    </Box>
                    <Tabs defaultActiveKey="1" activeKey={key} onChange={(k: string) => setKey(k)} items={items} />
                </Box>
            </Card>
            <br />
            <Card>{key === '1' ? <Tab1 /> : key === '2' ? <Tab2 /> : <Tab3 />}</Card>
        </>
    );
};
