import { Box, PageHeader } from '@/components';
import { Tabs } from 'antd';
import { getTabs } from './constants';

export const Accidents = () => {
    return (
        <>
            <PageHeader title="Бахтсиз ходисалар" />
            <Box $p="20px" style={{ background: '#FFF' }}>
                <Tabs style={{ width: '100%' }} defaultActiveKey="1" items={getTabs()} />
            </Box>
        </>
    );
};
