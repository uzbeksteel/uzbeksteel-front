import { API_URL } from '@/constants';
import { Endpoints } from '@/lib/services';
import { addMessage, dateFormatter } from '@/lib/utils';
import { IActs } from '@/types/graphics';
import { Badge } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <Link
                to={''}
                onClick={async () => {
                    try {
                        const response = await axios.get(`${API_URL}${Endpoints.Files}/${r.file.id}/${Endpoints.Download}`, { responseType: 'blob' });
                        // Extract filename from Content-Disposition header if present
                        const contentDisposition = response.headers['content-disposition'];
                        let filename = 'downloaded_file';

                        if (contentDisposition) {
                            const filenameMatch = contentDisposition.match(/filename="?(.+)"?/);
                            if (filenameMatch.length > 1) {
                                filename = filenameMatch[1];
                            }
                        }

                        // Create a URL for the file
                        const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
                        const fileLink = document.createElement('a');

                        fileLink.href = fileURL;
                        fileLink.setAttribute('download', filename); // Set the filename for download
                        document.body.appendChild(fileLink);

                        fileLink.click();

                        // Clean up
                        fileLink.remove();
                        window.URL.revokeObjectURL(fileURL);
                    } catch (error) {
                        addMessage(error);
                    }
                }}
            >
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
