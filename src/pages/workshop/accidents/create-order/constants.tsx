import { TabsProps } from 'antd';
import { ExportForm } from './export-form.tsx';
import { ExportPdf } from './export-pdf.tsx';

export const createOrderTabs = () =>
    [
        {
            key: '1',
            label: 'Буйруқ шакллантириш',
            children: <ExportForm />,
        },
        {
            key: '2',
            label: 'PDF файл юклаш',
            children: <ExportPdf />,
        },
    ] as TabsProps['items'];
