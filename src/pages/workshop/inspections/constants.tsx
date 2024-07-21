import { TabsProps } from 'antd';
import { FirstStageInspection, SecoundStageInspection } from './tabs';
export const inspectionTabs = () =>
    [
        {
            key: '1',
            label: 'Биринч босқич текширув',
            children: <FirstStageInspection />,
        },
        {
            key: '2',
            label: 'Иккинчи босқич текширув',
            children: <SecoundStageInspection />,
        },
    ] as TabsProps['items'];
