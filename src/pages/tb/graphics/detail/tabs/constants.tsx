import { downloadFile } from '@/lib/services';
import { addMessage, dateFormatter } from '@/lib/utils';
import { IActs } from '@/types/graphics';
import { Badge } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const onClick = async (id: string) => {
    try {
        const response = await downloadFile(id);

        const contentDisposition = response?.headers['content-disposition'];
        let filename = 'downloaded_file';

        if (contentDisposition) {
            const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
            if (filenameMatch && filenameMatch[1]) {
                filename = filenameMatch[1].replace(/['"]/g, '');
            }
        }

        const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
        const fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', filename);
        document.body.appendChild(fileLink);

        fileLink.click();

        fileLink.remove();
        window.URL.revokeObjectURL(fileURL);
    } catch (error) {
        addMessage(error);
    }
};

export const ActsColumns: ColumnsType<IActs> = [
    {
        title: 'Т/р',
        key: 'Т/р',
        width: 80,
        render: (_, __, index: number) => index + 1,
        sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'File',
        dataIndex: ['file', 'name'],
        key: 'file',
        render: (v, r) => (
            <Link to={''} onClick={() => onClick(r.file.id)}>
                {v}
            </Link>
        ),
    },
    {
        title: 'Сана',
        dataIndex: 'created_at',
        key: 'sana',
        render: (d) => dateFormatter(d),
        sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    },
    {
        title: 'Workshop',
        dataIndex: ['workshop', 'name'],
        key: 'workshop',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (v) => <>{v == 'PENDING' ? <Badge status="warning" text={v.toLowerCase()} /> : v == 'APPROVED' ? <Badge status="success" text={v.toLowerCase()} /> : <Badge status="error" text={v.toLowerCase()} />}</>,
    },
];
